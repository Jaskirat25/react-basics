import { useCallback, useState ,useEffect} from 'react'

import './App.css'

function App() {
const [length, setLength] = useState(20)
const [numbers, setNumbers] = useState(false)
const [characters, setCharacters] = useState(false)
const[password, setPassword] = useState('')
const[copy, setCopy] = useState(false)
const handleGeneratePassword = useCallback(() => {
 
  let pass='';
  let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if(numbers)str+='1234567890'
  if (characters) str+= '!@#$%^&*()_+'
  for (let i = 1; i <=length; i++){
    let ans=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(ans)
  }
  setPassword(pass)
  setCopy(false)
},[length, numbers, characters])
 
const handlecopy = () => {
  navigator.clipboard.writeText(password)
  setCopy(true)
}


useEffect(() => {
  handleGeneratePassword()
},[length, numbers, characters])

  return (
    <div className='w-full h-screen flex justify-center bg-black'>
      <div className='bg-gray-600 w-full max-w-md h-60 rounded-md outline-none p-4 mt-20'>

<h1 className='text-white text-4xl'>PASSWORD GENERATOR</h1>
<div className='flex flex-row justify-between p-1'>

<input type="text"

placeholder='password'
className='w-full h-10 mt-4 p-2 rounded-md text-stone-900'
value={password}
readOnly
/>
<button className='bg-blue-500 text-white p-2 rounded-md h-10 mt-4 shrink-0' onClick={handlecopy} >
  {copy ? 'copied' : 'copy'}
</button>

</div >
<div className='flex flex-row justify-evenly p-1 mt-5 text-white'>

<input 
className='cursor-pointer'
type="range"
value={length}
min={6}
max={30}
onChange={(e) => setLength(e.target.value)}
/>
<label> length:{length}</label>

<input type="checkbox"
defaultValue={numbers}
id="numbers"
onChange={()=>{
  setNumbers((prev) => !prev)
}}
/>
<label htmlFor='numbers'> numbers</label>
<input type="checkbox"
defaultValue={characters}
id="characters"
onChange={()=>{
  setCharacters((prev) => !prev)
}}
/>
<label htmlFor='characters'> characters</label>
</div>
      </div>
  

    </div>
  )
}

export default App
