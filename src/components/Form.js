import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
const Form = () => {
        const [input,setInput] = useState('');
        const dispatch = useDispatch();
        const addTodoHandler = (event) =>{
            event.preventDefault();
            dispatch(addTodo(input));
            setInput('');
        }
    
    return (
        <div className='mt-3 max-w-[90%] sm:max-w-[80%] mx-auto'>
            <form onSubmit={addTodoHandler} className='flex justify-between '>
                <input className='bg-slate-200 flex-1 h-10 pl-6' type='text' placeholder='Enter Your Todo Here' value={input} onChange={(e)=> setInput(e.target.value)}></input>
                <button className='w-[30%] bg-green-400 font-semibold  sm:hover:scale-105 transition-all duration-200'>Add</button>
            </form>
        </div>
    );
}

export default Form;
