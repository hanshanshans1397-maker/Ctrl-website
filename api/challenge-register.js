import { handleChallengeRegisterSubmission } from './_lib/handle-challenge-register.js';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

function keepAlive(promise) {
  const context = globalThis[Symbol.for('@vercel/request-context')]?.get?.();
  if (typeof context?.waitUntil === 'function') {
    context.waitUntil(promise);
    return true;
  }
  return false;
}

export default async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let followUp;
    const result = await handleChallengeRegisterSubmission(req.body ?? {}, {
      defer: (promise) => {
        followUp = promise;
      },
    });
    const held = followUp ? keepAlive(followUp) : false;
    res.status(200).json(result);
    if (followUp && !held) {
      await followUp;
    }
    return;
  } catch (error) {
    if (error.status === 400) {
      return res.status(400).json({ error: error.message, fields: error.fields });
    }
    console.error('Challenge register failed:', error);
    return res.status(500).json({ error: 'Failed to save registration' });
  }
}
