export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).send("Method Not Allowed");

  const { SUPABASE_URL, SUPABASE_KEY, SUPABASE_TABLE_PROFILE } = process.env;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE_PROFILE}?select=*`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    }
  });

  const data = await response.json();
  res.status(response.ok ? 200 : 500).json(data);
}
