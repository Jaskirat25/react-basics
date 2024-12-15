import Hello from './index'
import { useState } from 'react'

const App = () => {
  let [counter,set] =useState(0)
  const inc=()=>{
    if(counter<20){
  set(counter+1)
    }
  }
  const dec=()=>{
    if(counter>0){
  set(counter-1)
    }
  }
  return (
   <div>
    <h1>
      helloooo
    </h1>
<br />
<p>counter:{counter}</p>
    <button onClick={inc}>up</button>
    <br />
    <button onClick={dec}>down</button>

   </div>
  )
}

export default App

