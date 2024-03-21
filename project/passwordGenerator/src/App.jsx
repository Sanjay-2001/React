import { useState,useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
const[length,setLength] = useState(6);
const[numberAllowed,setNumberAllowed]=useState(false);
const[charAllowed,setCharAllowed]=useState(false);
const[password,setPassword]=useState("");

const passwordRef = useRef(null);

const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+= "0123456789";
  if(charAllowed) str +="!@#$%^&*{}[]+-_()~`";
  
  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length +1);
    pass += str.charAt(char);
    console.log(pass);
  }
  setPassword(pass);
},[length,numberAllowed,charAllowed,setPassword]);

const copyPassword = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20);
window.navigator.clipboard.writeText(password);
},[password]);

useEffect(()=>{
  passwordGenerator();
},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div className="container">
      <h1>Password Generator</h1>
      <div className="inputBox">
        <input className='input' type="text" value={password} placeholder='password' readOnly ref={passwordRef}/>
        <button className='button' onClick={copyPassword}>Copy</button>
      </div>
      <div className="actions">
        <div className="rangeContainer">
          <input type="range" min={6} max={100} value={length} className='rangeBar' onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <div className="checkContainer">
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className="checkContainer">
          <input type="checkbox" defaultChecked={charAllowed} id='numberInput' onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }} />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
