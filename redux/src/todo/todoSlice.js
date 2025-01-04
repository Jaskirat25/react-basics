import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello" }],
};

const TodoSlice=createSlice({
name:"todo",
initialState,
reducers:{
    addTodo:(state,action)=>{
const todo={
    id:nanoid(),
    text:action.payload
}
state.todos.push(todo)
    },
    removeTodo:(state,action)=>{
state.todos=state.todos.filter((todo)=>
todo.id!==action.payload
)
    },
    updateTodo:(state,action)=>{
const todo=state.todos.find((todo)=>todo.id===action.payload)
todo.text=action.payload.text
    }
}
})
export const {addTodo,updateTodo,removeTodo}=TodoSlice.actions
export default TodoSlice.reducer