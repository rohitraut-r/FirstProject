import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
  const [inputData, setinputData] = useState('');
  const [todos, setTodos] = useState([
    'Walk for refreshment',
    'Walk the dog',
    'Rest a while',
    'Watch a movie'
  ]);
  return (
    <div class="container">
    <h3 class = "app-logo">Todo App</h3><br></br>
    <input 
        type="text" 
        class = "enter" 
        placeholder='Enter the items'
        value={inputData}
        onChange = {(e) => setinputData(e.target.value)} 
        onClick = {handleSubmit}
         >
     </input>
    <button class = "add">Add Todo</button>
    <h3 class="todo-list">Todo Lists</h3>
    <ul class="list">
        {todos.map((todo) =>(
          <li>{todo}</li>
          ))}
         
    </ul>
    <button class="remove">Remove</button>
  </div>
  )
}

export default Todo