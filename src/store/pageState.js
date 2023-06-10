import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home:false,
    about:false,
    projects:true,
    contact:false,
    certif:false,
    blog:false,
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
            state.certif=false;
            state.blog=false;
        },
        setAbout(state,actions){
            state.home=false;
            state.about=true;
            state.projects=false;
            state.contact=false;
            state.certif=false;
            state.blog=false;
        },
        setProjects(state,actions){
            state.home=false;
            state.about=false;
            state.projects=true;
            state.contact=false;
            state.certif=false;
            state.blog=false;
        },
        setContact(state,actions){
            state.home=false;
            state.about=false;
            state.projects=false;
            state.contact=true;
            state.certif=false;
            state.blog=false;
        },
        setCertif(state,actions){
            state.home=false;
            state.about=false;
            state.projects=false;
            state.contact=false;
            state.certif=true;
            state.blog=false;
        },
        setBlog(state,actions){
            state.home=false;
            state.about=false;
            state.projects=false;
            state.contact=false;
            state.certif=false;
            state.blog=true;
        } 
    }
})

export const pageStateActions = pageStateSlice.actions 
export default pageStateSlice.reducer