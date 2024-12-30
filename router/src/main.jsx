import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from '/components/home/Home.jsx'
import Contact from '/components/contact/Contact.jsx'
import Layout from './Layout.jsx'
import About from '/components/about/About.jsx'
import User from '/components/user/User.jsx'
import { useLoaderData } from 'react-router-dom'
import Github,{githubInfoLoader} from '/components/github/Github.jsx'
const router=createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children
  :[
    {
      path:"/",element:<Home />
    },
    {
    path:"/about",element:<About />
  },
  {
    path:"/contact",element:<Contact />
  },{
    path:"/user/:id",element:<User /> },
    {
      path:"github",element:<Github />,
      loader:githubInfoLoader ,
    }
 ],
  
},

])



createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

)
