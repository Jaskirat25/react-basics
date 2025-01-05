import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

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
   updateTodo: (state, action) => {
  const { id, text } = action.payload; 
  const todo = state.todos.find((todo) => todo.id === id); // Find the todo by id
console.log(id);

  if (todo) {
    todo.text = text; 
  } else {
    console.error("Todo not found for id:", id);
  }}}
})
export const {addTodo,updateTodo,removeTodo}=TodoSlice.actions
export default TodoSlice.reducer