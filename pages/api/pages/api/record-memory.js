// pages/api/record-memory.js
import { createClient } from '@supabase/supabase-js';
import { saveMemoryForUser } from './memory-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, memory } = req.body;

  if (!userId || !memory) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await saveMemoryForUser(supabase, userId, memory);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error saving memory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
