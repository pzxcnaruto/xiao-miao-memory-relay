// memory-utils：處理記憶的輔助函式（儲存、格式化等）

// 假設這裡未來會與 Supabase 整合
export function formatMemory(raw) {
  return {
    id: raw.id || 'unknown',
    timestamp: raw.timestamp || Date.now(),
    content: raw.content || '',
  };
}

export async function saveMemory(memory) {
  // TODO: 實作儲存邏輯，可整合 Supabase
  console.log('儲存記憶（模擬）:', memory);
  return { success: true };
}
