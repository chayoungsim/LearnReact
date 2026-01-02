import { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (e) => {
        setTodo(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(todo === "") {
            return;
        }
        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
        
    }
    console.log(todos);
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Write your to do..." 
                value={todo}
                onChange={onChange}
            />
            <button type="submit">Add TO Do</button>
        </form>
    </div>
  )
}

export default Todo