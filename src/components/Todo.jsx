import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div class="container">
    <h3 class = "app-logo">Todo App</h3><br></br>
    <input type="text" class = "enter" placeholder='Enter the items'></input>
    <button class = "add">Add Todo</button>
    <h3 class="todo-list">Todo Lists</h3>
    <ul class="list">
        <li>Hello 1</li>
        <li>Hello 2</li>
        <li>Hello 3</li>
    </ul>
    <button class="remove">Remove</button>
  </div>
  )
}

export default Todo