import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    on:false,
}

const modalStateSlice = createSlice({
    name:'modalState',
    initialState,
    reducers:{
        isOn(state,actions){
            state.on=!state.on
        }
    }
})

export const modalStateActions = modalStateSlice.actions 
export default modalStateSlice.reducer