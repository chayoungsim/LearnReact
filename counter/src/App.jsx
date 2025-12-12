
import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [counters, setCounters] = useState([1, 2])

  const remove = (id) => {
    setCounters(prev => prev.filter(i => i !== id))
  }

  return (
    <>
      {counters.map(id => (
        <Counter key={id} onDelete={() => remove(id)} />
      ))}
    </>
  )
}

export default App
