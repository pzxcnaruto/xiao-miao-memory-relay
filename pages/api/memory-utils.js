import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function saveMemory(memory) {
  const { data, error } = await supabase
    .from('memories')
    .insert([memory]);
  if (error) throw error;
  return data;
}

export async function getAllMemories() {
  const { data, error } = await supabase
    .from('memories')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}
