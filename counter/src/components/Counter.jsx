import React from 'react'
import { useState } from 'react'

const Counter = ({ onDelete }) => {
const [counter, setCounter] = useState(0);


const handleIncrement = () => {
    setCounter(counter +1 )
}

const handleDecrement  = () => {
    setCounter(counter - 1)
}

const handleReset = () => {
  setCounter(0)
}

const handleDelete = () => {
  if (typeof onDelete === 'function') {
    onDelete()
  }
}

  return (
    <div className='counter-app'> 
      <h2>{counter}</h2>
      <button type='button' onClick={handleIncrement}>Increment</button>
      <button type='button' onClick={handleDecrement }>Decrement</button>
      <button type='button' onClick={handleReset}>Reset</button>
      <button type='button' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Counter