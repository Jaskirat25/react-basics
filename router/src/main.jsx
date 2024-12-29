import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from '/components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from '/components/about/About.jsx'
const router=createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children
  :[{path:"/",element:<Home />},{
    path:"/about",element:<About />
  }
 ],
  
},

])



createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

)
