import React, {useState} from 'react'
import { Form, Button } from './style';

const ToDoForm = (props) => {
    const[input, setInput] = useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('');
    }


  return (
    <Form onSubmit={handleSubmit}>
        <input 
            type="text"    
            placeholder='Add Task..' 
            value={input} 
            name='text' 
            onChange={handleChange}/>
        <Button>
            Add
        </Button>
    </Form>
  )
}

export default ToDoForm