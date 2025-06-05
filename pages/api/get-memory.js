// get-memory API：處理記憶讀取請求

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // TODO: 這裡可改為從 Supabase 讀取資料
      const fakeMemory = {
        id: 'test-memory-id',
        timestamp: Date.now(),
        content: '這是測試用的記憶內容。',
      };

      res.status(200).json({ success: true, memory: fakeMemory });
    } catch (error) {
      res.status(500).json({ success: false, error: '伺服器錯誤' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
