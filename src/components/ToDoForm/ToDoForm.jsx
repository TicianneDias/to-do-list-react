import React, {useState, useEffect, useRef} from 'react'
import { Form, Button, Input } from './style';

const ToDoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    };

  return (
    <Form onSubmit={handleSubmit} autoComplete='off'>
      {props.edit ? (
        <>
          <Input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            autoComplete='off'
          />
          <Button onClick={handleSubmit}>
            Update
          </Button>
        </>
      ) : (
        <>
          <Input
            placeholder='Add task...'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>
            Add
          </Button>
        </>
      )}
    </Form>
  )
}

export default ToDoForm