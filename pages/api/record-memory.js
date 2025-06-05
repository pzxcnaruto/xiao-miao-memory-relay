// record-memory API：接收記憶內容並儲存

import { saveMemory } from './memory-utils';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const memory = req.body;

      // 儲存記憶（目前為模擬）
      const result = await saveMemory(memory);

      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: '寫入失敗' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
