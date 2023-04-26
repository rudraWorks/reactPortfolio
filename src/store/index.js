import {configureStore} from "@reduxjs/toolkit"
import pageStateReducer from "./pageState"

const store = configureStore({
    reducer:{
        pageState:pageStateReducer
    }
})

export default store