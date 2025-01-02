import { useState } from 'react'
import { UserContextProvider } from './context/usecontextprovider'
import Login from './components/login'
import Profile  from './components/profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
