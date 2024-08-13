import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Displaywidgets from './Displaywidgets'


const Navbar = () => {

  return (
    <>
       <nav>
        <div>
           
          <h1 className='create'>Create Your Own Widget</h1>

        </div>
      </nav>
      <div className="regilogin">
      <NavLink to="/widget"><p>Add-Widget</p></NavLink>
      <NavLink to="/displaywidget"><p>ViewAll</p></NavLink>

        </div>
      
        
    </>
  )
}

export default Navbar