import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home:false,
    about:true,
    projects:false,
    contact:false
}

const pageStateSlice = createSlice({
    name:'pageState',
    initialState,
    reducers:{
        setHome(state,actions){
            state.home=true;
            state.about=false;
            state.projects=false;
            state.contact=false;
        },
        setAbout(state,actions){
            state.home=false;
            state.about=true;
            state.projects=false;
            state.contact=false;
        },
        setProjects(state,actions){
            state.home=false;
            state.about=false;
            state.projects=true;
            state.contact=false;
        },
        setContact(state,actions){
            state.home=false;
            state.about=false;
            state.projects=false;
            state.contact=true;
        }
    }
})

export const pageStateActions = pageStateSlice.actions 
export default pageStateSlice.reducer