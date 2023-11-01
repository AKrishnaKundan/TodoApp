import {createSlice, nanoid} from "@reduxjs/toolkit";

let prevState = localStorage.getItem("state");
prevState = JSON.parse(prevState);

if (prevState === null){
    prevState = {
        todos: []
    }
}

const initialState = {
    todos: prevState.todos,
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            let id = nanoid();
            state.todos.push({
                id: id,
                text: action.payload,
                finished: false
            })
            let currentState ={todos: state.todos};
            localStorage.setItem("state", JSON.stringify(currentState));
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                return (todo.id!==action.payload)
            })

            let currentState ={todos: state.todos};
            localStorage.setItem("state", JSON.stringify(currentState));
        },
        finishTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.finished = !todo.finished;
            }

            let currentState ={todos: state.todos};
            localStorage.setItem("state", JSON.stringify(currentState));
        },
        markAllAsFinished: (state, action) => {
            state.todos.forEach((todo) => {
              todo.finished = true;
            })

            let currentState ={todos: state.todos};
            localStorage.setItem("state", JSON.stringify(currentState));
        },
        clearAll: (state, action) => {
            state.todos = [];
            let currentState ={todos: []};
            localStorage.setItem("state", JSON.stringify(currentState));
        },
    }
})

export const {addTodo, removeTodo, finishTodo, markAllAsFinished, clearAll} = todoSlice.actions;
export default todoSlice.reducer;