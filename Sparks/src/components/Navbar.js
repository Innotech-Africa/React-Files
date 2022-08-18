import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <Link to='/create'>Create User</Link>
        <Link to='/list'>List User</Link>
    </div>
  )
}

export default Navbar