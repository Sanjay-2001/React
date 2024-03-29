import { useState } from 'react'
import Item from './components/Item'
import './App.css'
import Cart from './components/Cart'

function App() {
  

  return (
    <>
    <div >
      <div style={{display:"flex",gap:"1rem"}}>

     <Item name="MacBook Pro" price={100000}/>
     <Item name="Sandisk Pendrive" price={2000}/>
     <Item name="Samsung A35" price={30000}/>

      </div>
     <Cart/>
    </div>
    </>
  )
}

export default App
