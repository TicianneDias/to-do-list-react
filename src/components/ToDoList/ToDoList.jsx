import React, {useState} from 'react'
import ToDoForm from '../ToDoForm/ToDoForm'
import { ToDoDiv } from './style';

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    };

  return (
      
    <ToDoDiv>
        <h1>What do you want to do today?</h1>
        <ToDoForm onSubmit={addTodo} />
    </ToDoDiv>
  )
}

export default ToDo