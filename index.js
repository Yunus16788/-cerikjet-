import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleClick = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    })
    const data = await res.json()
    setOutput(data.result)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>İçerikJet</h1>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows="4" cols="50" />
      <br />
      <button onClick={handleClick}>İçerik Üret</button>
      <pre>{output}</pre>
    </div>
  )
}
