import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {removeTodo, finishTodo} from "../features/todoSlice";


function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>{
        return state.todos;
    })

    const removeTodoHandle = (e)=>{
        dispatch(removeTodo(e.target.id));
    }

    const finishTodoHandle = (e)=>{
        dispatch(finishTodo(e.target.id));
    }

    return (
        <div>
            {
                todos.map((todo)=>{
                    if (todo.finished){
                        
                        return(
                        <div key={todo.id} className='flex items-center my-4 sm:gap-4 gap-2'>
                            <div className="text-center bg-yellow-300 border-2 border-black rounded-md py-2 sm:w-56 w-48 break-words"> 
                                {todo.text}
                            </div>
                            <button onClick={finishTodoHandle}>
                                <img id={todo.id} src="finished.png" alt=""/>
                            </button>
                            <button onClick={removeTodoHandle}>
                                <img id={todo.id} src="delete.png" alt=""/>
                            </button>
                        </div>
                        );
                    }
                    else{
                        return(
                        <div key={todo.id} className='flex items-center my-4 sm:gap-4 gap-2'>
                            <div className="text-center border-2 border-black rounded-md py-2 sm:w-56 w-48 break-words">
                                {todo.text}
                            </div>
                            <button onClick={finishTodoHandle}>
                                <img id={todo.id} src="finished.png" alt=""/>
                            </button>
                            <button onClick={removeTodoHandle}>
                                <img id={todo.id} src="delete.png" alt=""/>
                            </button>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Todos;