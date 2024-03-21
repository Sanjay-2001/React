import { useState } from 'react'

import './App.css'

function App() {

const[counter , setCounter] = useState(0);
const addValue = ()=>{
 setCounter(counter +1);
}
const remValue =()=>{
  setCounter(counter-1);
}
  return (
    <>
     <h1>Counter</h1>
     <h2>Counter Value: {counter}</h2>
     <div className="btn-container">
     <button onClick={addValue}>Add</button>   
     <button onClick={remValue}>Remove</button>
     </div> 
    </>
  )
}

export default App
