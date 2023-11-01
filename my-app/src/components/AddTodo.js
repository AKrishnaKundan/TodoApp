import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import { addTodo, markAllAsFinished, clearAll} from '../features/todoSlice';

import Todos from './Todos';


function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    
    const addTodoHandle = (e)=>{
      e.preventDefault();
        if (input === ''){
         
        }
        else{
          if (input.length>20){
          }
          dispatch(addTodo(input));
          setInput('');
        }
    }
    const finishedAll = ()=>{
      dispatch(markAllAsFinished());
    }

    const clearAllTodos = ()=>{
      dispatch(clearAll());
    }

  return (
    <div>
        <form onSubmit = {addTodoHandle} className='flex align-center'>
            <input 
              type="text" 
              placeholder="Add your todo"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className="border-2 border-black rounded-md p-2 mr-3 sm:w-56 w-48"
            />
            <button type="submit" className="p-2 bg-yellow-300 border-2 border-black rounded-lg hover:opacity-75">
              <img src="add.png" alt="Add" className='mx-auto my-auto'/>
            </button>
        </form>
        <Todos/>
        <button 
          onClick={finishedAll}
          className="bg-yellow-300 border-2 border-black sm:text-[16px] text-[13px] px-4 py-2 rounded-lg my-4 mr-5 font-bold hover:bg-yellow-200"
        >
          Finished All
        </button>
        <button 
          onClick={clearAllTodos}
          className="bg-yellow-300 border-2 border-black sm:text-[16px] text-[13px] px-4 py-2 rounded-lg font-bold hover:bg-yellow-200"
        >
          Clear All
          </button>
    </div>
  )
}

export default AddTodo