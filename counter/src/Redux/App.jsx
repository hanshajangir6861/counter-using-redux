import React from 'react'
import { decrementCounter,incrementCounter} from './Slice'
import {useDispatch,useSelector} from 'react-redux'
import './App.css'


function App(){
    const dispatch=useDispatch()
    const init= useSelector((state)=>{return state.counterRed})

    return(
        <div className='main'>
            <h2>Counter Using Redux</h2>
            <button onClick={()=> dispatch(incrementCounter())}>increment</button>
            <p>{init.counter}</p>
            <button onClick={()=> dispatch(decrementCounter())}>decrement</button>
        </div>
    )
}export default App