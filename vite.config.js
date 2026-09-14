import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { handleApplySubmission } from './api/lib/handle-apply.js';
import { handleRunRegisterSubmission } from './api/lib/handle-run-register.js';

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

function jsonApiDevPlugin(env, routes) {
  return {
    name: 'json-api-dev',
    configureServer(server) {
      for (const route of routes) {
        server.middlewares.use(route.path, async (req, res, next) => {
          if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
            res.end();
            return;
          }

          if (req.method !== 'POST') {
            next();
            return;
          }

          Object.assign(process.env, env);

          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');

          try {
            const body = await readJsonBody(req);
            const result = await route.handler(body);
            res.statusCode = 200;
            res.end(JSON.stringify(result));
          } catch (error) {
            if (error.status === 400) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: error.message, fields: error.fields }));
              return;
            }
            console.error(`[dev${route.path}]`, error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: route.errorMessage }));
          }
        });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      jsonApiDevPlugin(env, [
        {
          path: '/api/apply',
          handler: handleApplySubmission,
          errorMessage: 'Failed to send email',
        },
        {
          path: '/api/run-register',
          handler: handleRunRegisterSubmission,
          errorMessage: 'Failed to save registration',
        },
      ]),
    ],
  };
});
