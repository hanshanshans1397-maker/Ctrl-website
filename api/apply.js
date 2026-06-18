import { handleApplySubmission } from './lib/handle-apply.js';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
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
    const result = await handleApplySubmission(req.body ?? {});
    return res.status(200).json(result);
  } catch (error) {
    if (error.status === 400) {
      return res.status(400).json({ error: error.message, fields: error.fields });
    }
    console.error('Apply form email failed:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
