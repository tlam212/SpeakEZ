import React from 'react'
import { Link } from 'react-router-dom'

const Logo =()=>{
  return(
    <Link to="/venues">
    <div className="logoDiv navbar-brand">
      <p className="logoLink">SpeakE.Z</p>
    </div>
    </Link>
  )
}
export default Logo
