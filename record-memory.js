export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { SUPABASE_URL, SUPABASE_KEY, SUPABASE_TABLE_PROFILE } = process.env;

  const record = req.body;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE_PROFILE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify(record)
  });

  const data = await response.json();
  res.status(response.ok ? 200 : 500).json(data);
}
