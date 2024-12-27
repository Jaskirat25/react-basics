import { useState } from 'react'
import currencyinfo from '/hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [data]=currencyinfo('usd')
  return (
<h1 className='text-3xl bg-red-700'>currency converter</h1>

  )
}

export default App
