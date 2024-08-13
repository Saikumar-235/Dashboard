import React from 'react'
import { NavLink } from 'react-router-dom'

const Widget = () => {
  return (
    <>
    <div className="form-group">
            
            <NavLink to="/viewall">
            <button>+Add-Widget</button>
            </NavLink>
          </div>
    </>
  )
}

export default Widget