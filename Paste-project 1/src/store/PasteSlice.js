import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState={
    pastes:localStorage.getItem("pastes")?
    JSON.parse(localStorage.getItem("pastes")):[]
}
const Paste=createSlice(
    {
        name:"paste",
        initialState,
        reducers:{
            addPaste:(state,action)=>{
                state.pastes.push(action.payload);
        },
            updatePaste:(state,action)=>{

            },
            removePaste:(state,action)=>{

            },
            viewPaste:(state,action)=>{

            }
        }
    }
)
export default Paste.reducer;
export const {addPaste,updatePaste,removePaste,viewPaste}=Paste.actions;