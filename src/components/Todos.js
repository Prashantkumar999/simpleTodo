import React from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import { MdDeleteForever } from "react-icons/md";


const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return (
        <div className='max-w-[90%] sm:max-w-[80%] mx-auto'>
            {
                todos.map((todo) => (
                    <div className=' relative flex justify-between font-semibold items-center min-h-10 text-white bg-slate-600 my-1 py-3 px-10'>
                        <li className='list-none break-words max-w-[80%]'>{todo.text}</li>
                        <button className='text-red-400 absolute top-2 right-1' onClick={()=>dispatch(removeTodo(todo.id))}><MdDeleteForever size={30}/></button>
                    </div>))
            }
        </div>
    );
}

export default Todos;
