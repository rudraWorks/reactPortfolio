import {configureStore} from "@reduxjs/toolkit"
import pageStateReducer from "./pageState"
import modalStateReducer from "./modalState"

const store = configureStore({
    reducer:{
        pageState:pageStateReducer,
        modalState:modalStateReducer,
    }
})

export default store