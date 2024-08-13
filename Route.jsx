import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Addtask from './Addtask'
// import Viewall from './Viewall'
import Update from './Update'
import Displaywidgets from './Displaywidgets'

export const router = createBrowserRouter(
   [
         {
        path: "/",
        element: <Home/>
         },
             {
                path:"/widget",
                element: <Addtask/>
            },
        
            {
                path:"/displaywidget",
                element: < Displaywidgets/>
            },
            {
                path: "/update/:id",
                element: <Update/>
            }
        ]
 )
