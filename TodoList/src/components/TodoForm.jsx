import React, { useState } from 'react'

const TodoForm = ({onAddTodo}) => {
  const [input, setInput] = useState('');

    const clickAdd = () => {
        if(input.trim() !=='') {
            onAddTodo(input)
            setInput("");
        }        
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            clickAdd();
        }
    }

  return (
    <div>
        <h2>Add Todo</h2>
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
            <button type="button" onClick={clickAdd}>Add</button>
        </div>
    </div>
  )
}

export default TodoForm