import React, {useState} from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import { CgCloseR } from 'react-icons/cg';
import { FaEdit } from 'react-icons/fa';
import {CompleteToDo} from '../ToDo/style'

const ToDo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <CompleteToDo
      className={todo.isComplete}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <CgCloseR
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <FaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </CompleteToDo>
  ));
};

export default ToDo