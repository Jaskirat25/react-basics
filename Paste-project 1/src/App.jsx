import { useState } from 'react'
import {RouterProvider} from 'react-router-dom'
import Routes from './Routes'
import { Toaster } from 'react-hot-toast'
function App() {
 

  return (
    <>
    <RouterProvider router={Routes}/>
    <Toaster/>
    </>
  )
}

export default App
