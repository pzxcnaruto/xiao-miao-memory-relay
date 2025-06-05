import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' })
  }

  const { task, status } = req.body
  const { data, error } = await supabase
    .from('todos')
    .insert([{ 任務: task, 地位: status }])

  if (error) return res.status(500).json({ error })
  res.status(200).json({ data })
}