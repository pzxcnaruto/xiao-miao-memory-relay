import { useState, useEffect } from 'react'

export default function MemoryPage() {
  const [task, setTask] = useState('')
  const [status, setStatus] = useState('')
  const [todos, setTodos] = useState([])

  const loadData = async () => {
    const res = await fetch('/api/get-memory')
    const data = await res.json()
    setTodos(data)
  }

  const submit = async () => {
    await fetch('/api/record-memory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, status })
    })
    setTask('')
    setStatus('')
    loadData()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 小喵記憶面板</h1>
      <input placeholder="任務內容" value={task} onChange={e => setTask(e.target.value)} />
      <input placeholder="地位" value={status} onChange={e => setStatus(e.target.value)} />
      <button onClick={submit}>記錄記憶</button>
      <hr />
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t.任務} - {t.地位}</li>
        ))}
      </ul>
    </div>
  )
}