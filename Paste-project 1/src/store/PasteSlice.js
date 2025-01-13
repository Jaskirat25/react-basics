import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};


const Paste = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      state.pastes.push(action.payload);
      
    },

    updatePaste: (state, action) => {
      const { title, content, _id } = action.payload;
      
      const index = state.pastes.findIndex((item) => item._id == _id);
      
      if (index !== -1) {
        state.pastes[index] = { ...state.pastes[index], title, content };
        
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
     

    },
    removePaste: (state, action) => {
      const post = state.pastes.filter((item) => item._id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(post));
      state.pastes = post;
      
      
    },
  },
});
export default Paste.reducer;
export const { addPaste, updatePaste, removePaste, viewPaste } = Paste.actions;
