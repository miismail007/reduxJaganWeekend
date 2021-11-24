import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, editTitle, increment } from './redux/actions'

function App() {
  const counter = useSelector((state)=>state.counter)
  const title = useSelector((state)=>state.title)
  const dispatch = useDispatch() //to create onject for dispatch class 
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch(increment()) // to trigger action from actions.js for increment the counter state
      }}>+</button>
      <button onClick={()=>{
        dispatch(decrement()) // to trigger action from actions.js for decrement the counter state
      }}>-</button>
      <h1>{title}</h1>
      <input onChange={(text)=>{
        dispatch(editTitle(text.target.value))
      }}/>
    </div>
  )
}

export default App
