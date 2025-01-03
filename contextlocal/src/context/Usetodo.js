import { useState,useContext,createContext } from "react";

export const Todocontext=createContext(
    {
        todos:[
        {
           id:1,
           todo:"hi",
           completed:false 
          },],
          addTodo:(todo)=>{},
          updateTodo:(id,todo)=>{},
          deleteTodo:(id)=>{},
          togglecomplete:(id)=>{}
          },

);
export const Usetodo=()=>{
    return useContext(Todocontext)
};

export const TodoProvider=Todocontext.Provider;
