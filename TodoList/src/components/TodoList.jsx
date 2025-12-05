import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { TodoItem } from './TodoItem'

const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
        id:Date.now(),
        text,
        completed:false
    }
    setTodos([...todos, newTodo])
  }



  const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div>
        <h1>TodoList</h1>
        <TodoForm onAddTodo={addTodo} />
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
                ))                
            }
            
        </ul>    
    </div>
  )
}

export default TodoList