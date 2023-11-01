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
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className="border-2 border-black rounded-md p-2 mr-3 w-56"
            />
            <button type="submit" className="p-2 bg-yellow-300 border-2 border-black rounded-lg">
              <img src="add.png" alt="Add" className='mx-auto my-auto'/>
            </button>
        </form>
        <Todos/>
        <button 
          onClick={finishedAll}
          className="bg-yellow-300 border-2 border-black px-4 py-2 rounded-lg my-5 mr-5 font-bold"
        >
          Finished All
        </button>
        <button 
          onClick={clearAllTodos}
          className="bg-yellow-300 border-2 border-black px-4 py-2 rounded-lg my-5 font-bold"
        >
          Clear All
          </button>
    </div>
  )
}

export default AddTodo