// pages/api/get-memory.js
import { createClient } from '@supabase/supabase-js';
import { getUserLatestMemory } from './memory-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  try {
    const memory = await getUserLatestMemory(supabase, userId);
    res.status(200).json(memory || {});
  } catch (error) {
    console.error('Error fetching memory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
