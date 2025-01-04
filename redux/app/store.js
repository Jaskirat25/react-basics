import { configureStore } from "@reduxjs/toolkit";

import TodoProvider from "../src/todo/todoSlice"


export const store=configureStore({
    reducer:TodoProvider}
)