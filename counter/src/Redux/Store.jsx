import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Slice.jsx'
export const store = configureStore({
    reducer:{
        counterRed : counterReducer
    }
})