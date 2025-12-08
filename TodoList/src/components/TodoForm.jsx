import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'



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
    <div className='todo-form'>        
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder='일정을 입력하세요' />
            <button type="button" onClick={clickAdd} className='btn-add'><FontAwesomeIcon icon={faPenToSquare} /></button>
        </div>
    </div>
  )
}

export default TodoForm