import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {
  const [input, setInput] = useState('');

    const clickAdd = () => {
        onAddTodo(input)
        setInput("");
    }
  return (
    <div>
        <h2>Add Todo</h2>
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="button" onClick={clickAdd}>Add</button>
        </div>
    </div>
  )
}

export default TodoForm