import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[todo, setTodo]=useState([])
  return (

   <>
  <h1>Todo app</h1>
  <form action="">
    <input type='text'/> 
    <input type='submit'/> 

  </form>
   </>
  );
}

export default App;
