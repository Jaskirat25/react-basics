import { useEffect, useState } from 'react'



function App() {
  const [count, setCount] = useState(()=>{
    return localStorage.getItem("bg");
  })
useEffect(()=>{
  return localStorage.setItem("bg",count)
},[count])
  return (
    
     <div className="w-full h-screen" 
     style={{ backgroundColor: count}}>
<div className='fixed flex flex-wrap bottom-12 inset-x-0 justify-center'>
  <div className='bg-white px-2 py-2 flex flex-wrap '>
    <button onClick={()=>setCount("red")} className='text-white bg-red-800 rounded-xl px-2 py-1'>Red</button>
  </div>
  <div className='bg-white px-2 py-2 flex flex-wrap '>
    <button onClick={()=>setCount("green")} className='text-white bg-green-800 rounded-xl px-2 py-1'>green</button>
  </div>
  <div className='bg-white px-2 py-2 flex flex-wrap '>
    <button onClick={()=>setCount("blue")} className='text-white bg-blue-900 rounded-xl px-2 py-1'>blue</button>
  </div>
  <div className='bg-white px-2 py-2 flex flex-wrap '>
    <button onClick={()=>setCount("olive")} className='text-white rounded-xl px-2 py-1' style={{backgroundColor:"olive"}}>olive</button>
  </div>
  <div className='bg-white px-2 py-2 flex flex-wrap '>
    <button onClick={()=>setCount("black")} className='text-white bg-black rounded-xl px-2 py-1'>black</button>
  </div>  
</div>
    </div>


 
  )
}

export default App
