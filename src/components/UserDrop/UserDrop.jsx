import React from 'react'
import "./UserDropStyle.css"
import { Link } from 'react-router-dom'

const UserDrop = () => {
  return (
    <div className='DropBoxContainer'>
      <Link to="Login" className='LogLink' style={{textDecoration:"none"}}>
        Login
      </Link>
      <Link to="SignUp" className='LogLink' style={{textDecoration:"none"}}>
        Sign-Up
      </Link>
    </div>
  )
}

export default UserDrop
