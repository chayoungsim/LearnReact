import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import { TodoItem } from './TodoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const TodoList = () => {

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        try {
            return JSON.parse(storedTodos);
        } catch (error) {
            console.error("Error parsing todos from localStorage", error);
            return [];
        }
    }
    return [];

  });

  useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    const newTodo = {
        id:Date.now(),
        text,
        completed:false,
        createdAt: new Date().toISOString(),
    }
    setTodos([...todos, newTodo])
  }



  const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteAll = () => {
    setTodos([])
  }

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
  }

  return (
    <div className='todo-wrap'>
        <h1><FontAwesomeIcon icon={faCalendarDays} /></h1>
        <TodoForm onAddTodo={addTodo} />
        <div className='total'>총 항목 : {todos.length} <button onClick={deleteAll}>전체삭제</button></div>
        <ul className='todo-lists'>
            {
                todos.map(todo => (
                    <TodoItem 
                      key={todo.id} 
                      todo={todo} 
                      onDeleteTodo={deleteTodo} 
                      onToggleTodo={toggleTodo} 
                      onUpdateTodo={updateTodo}
                    />
                ))                
            }
            
        </ul>    
    </div>
  )
}

export default TodoList