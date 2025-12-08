import React, { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPen, faBoxArchive, faRectangleXmark } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ todo,onDeleteTodo, onToggleTodo, onUpdateTodo }) => {

  const [isEditing, setIsEditing] =useState(false);
  const [draft, setDraft] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if(isEditing && inputRef.current){
      inputRef.current.focus();
    }
  },[isEditing])

  const saveEdit = () => {
    const trimmed = draft.trim();
    if(!trimmed) {
      alert("내용을 입력해주세요");
      return;
    }
    onUpdateTodo(todo.id, trimmed);
    setIsEditing(false);
  }


  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div className='todo'>
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
            />
            {!isEditing ? (
              <div className='is'>
                <span className='tit'>{todo.text}</span>
                <div className='todo-btns'>
                    <button type="button" onClick={() => {
                      setDraft(todo.text);
                      setIsEditing(true)
                    }} title='수정'><FontAwesomeIcon icon={faPen} /></button>
                    <button type="button" onClick={() => onDeleteTodo(todo.id)} title="삭제"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </div>
            ) : (
              <div className="is">
                <input type="text"
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key==="Enter") saveEdit();
                    if(e.key==="Escape") {
                        setDraft(todo.text)
                        setIsEditing(false)
                    }
                  }}
                />
                <div className='todo-btns'>
                    <button type="button" onClick={saveEdit} title="저장"><FontAwesomeIcon icon={faBoxArchive} /></button>
                    <button type="button" onClick={() => {
                      setDraft(todo.text);
                      setIsEditing(false)
                    }} title="삭제"><FontAwesomeIcon icon={faRectangleXmark} /></button>
                </div>
              </div>
            )}
            
            
        </div>
    </li>
  )
}
