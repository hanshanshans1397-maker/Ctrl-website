import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const htmlPath = path.join(root, "scripts/news-posters/posters.html");
const outDir = path.join(root, "public/photos/news");
const ids = [
  "ctrl-day-cs",
  "ctrl-day-en",
  "challenge-cs",
  "challenge-en",
  "dny-ai-cs",
  "dny-ai-en",
  "videnska-cs",
  "videnska-en",
  "slovensko-cs",
  "slovensko-en",
];

const profile = path.join("/tmp", "ctrl-news-posters-chrome");
await rm(profile, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const chrome = spawn(
  "google-chrome",
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--remote-debugging-port=9333",
    `--user-data-dir=${profile}`,
    `file://${htmlPath}`,
  ],
  { stdio: "ignore" },
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let version;
for (let i = 0; i < 40; i += 1) {
  try {
    const res = await fetch("http://127.0.0.1:9333/json/version");
    version = await res.json();
    break;
  } catch {
    await sleep(150);
  }
}
if (!version) {
  chrome.kill();
  throw new Error("Chrome debugging port did not open");
}

const pages = await (await fetch("http://127.0.0.1:9333/json/list")).json();
const page = pages.find((entry) => entry.type === "page");
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve);
  ws.addEventListener("error", reject);
});

let seq = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  }
});

function send(method, params = {}) {
  const id = ++seq;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1024,
  height: 723,
  deviceScaleFactor: 2,
  mobile: false,
});
await send("Runtime.evaluate", {
  expression: "document.fonts.ready.then(() => true)",
  awaitPromise: true,
});

for (const id of ids) {
  await send("Runtime.evaluate", {
    expression: `(() => {
      document.querySelectorAll('.board').forEach((board) => {
        board.style.display = board.id === ${JSON.stringify(id)} ? '' : 'none';
      });
      return true;
    })()`,
  });
  await sleep(40);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    clip: { x: 0, y: 0, width: 1024, height: 723, scale: 2 },
    captureBeyondViewport: true,
  });
  const png = Buffer.from(shot.data, "base64");
  const dest = path.join(outDir, `${id}.webp`);
  await sharp(png).webp({ quality: 86, effort: 5 }).toFile(dest);
  console.log(`${dest} ${png.length} png bytes`);
}

ws.close();
chrome.kill();
