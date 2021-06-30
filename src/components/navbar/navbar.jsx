import React from 'react'
import {NavLink} from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
  return (
    <header className='navbar_container'>
      <nav>
        <NavLink to='/'>Splash</NavLink>
        <NavLink to='/signin'>Sign in</NavLink>
      </nav>
    </header>
  )
}

export default Navbar