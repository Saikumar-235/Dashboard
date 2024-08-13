import React from 'react'
import { RouterProvider } from 'react-router-dom'
import "./output.css"
import {router}  from "./Route"
import Home from './Home'
import Navbar from './Navbar'

const App = () => {
  return (
   
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App