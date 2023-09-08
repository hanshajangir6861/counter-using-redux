import {createSlice} from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name:'createSliceName',
    initialState:{
        counter:0
    },
    reducers:{
        incrementCounter: function(state,action){
            state.counter= state.counter +1
        },
        decrementCounter: function(state,action){
            state.counter= state.counter -1
        }
    }
})
export const {incrementCounter,decrementCounter}= counterSlice.actions
const counterReducer=counterSlice.reducer
export default counterReducer