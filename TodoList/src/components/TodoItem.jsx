import React from 'react'

export const TodoItem = ({ todo,onDeleteTodo, onToggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div>
            <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button type="button" onClick={() => onDeleteTodo(todo.id)}>삭제</button>
        </div>
    </li>
  )
}
