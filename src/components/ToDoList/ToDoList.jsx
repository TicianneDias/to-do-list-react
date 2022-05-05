import React, {useState} from 'react'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../ToDo/ToDo'
import { ToDoDiv } from './style';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
    };

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
    
  return (
      
    <ToDoDiv>
        <h1>What Do You Want To<span>.</span>Do Today?</h1>
        <ToDoForm onSubmit={addTodo} />
        <ToDo 
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
    </ToDoDiv>
  )
}

export default ToDoList