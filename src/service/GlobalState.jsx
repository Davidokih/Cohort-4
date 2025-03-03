import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  cart:[]
};

const GlobalState = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state,{payload})=>{
        state.currentUser = payload
    },
    logout: (state)=>{
        state.currentUser = null
    }
  },
});

export const {addUser} = GlobalState.actions;

export default GlobalState.reducer;

addUser()