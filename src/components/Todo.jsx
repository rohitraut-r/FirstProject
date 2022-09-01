import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [todos, setTodos] = useState([
    'Walk for refreshment',
    'Walk the dog',
    'Rest a while',
    'Watch a movie'
  ]);

  //Arrow function can also be used 
  // const handleSubmit = () =>{

  // }
  console.log(inputData);
  function handleSubmit(){
    setTodos([...todos, inputData]);
    setInputData('');
  }

  function removeAll(){
    setTodos(['']);
  }
  function deleteOne(){
  
  }
 

  return (
    <div class="container">
    <h3 class = "app-logo">Todo App</h3><br></br>
    <input 
        type="text" 
        class = "enter" 
        placeholder='Enter the items'
        value={inputData}
        onChange = {(e) => setInputData(e.target.value)} 
        
       
         >
     </input>
    <button class = "add"  onClick = {handleSubmit} disabled = {!inputData}>Add Todo</button>
    <h3 class="todo-list">Todo Lists</h3>
    <ul class="list">
        {todos.map((todo) =>(
          <li>{todo}<button class="edit" onClick={deleteOne}>Delete</button></li>
          ))}
         
    </ul>
    <button class="remove" onClick={removeAll}>Remove All</button>
  </div>
  )
}

export default Todo