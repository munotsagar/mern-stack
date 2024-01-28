import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewTodo } from '../redux/actions';

function TodoForm() {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text))
    }

    const onInputChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value);
    }

    return (
    <form className='form' onSubmit={onFormSubmit}>
        <input
        placeholder='Enter new Todo...'
        className='input'
        onChange={onInputChange} />
    </form>
  )
}

export default TodoForm