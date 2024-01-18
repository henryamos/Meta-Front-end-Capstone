import React, { useState } from 'react'
import logo from '../images/Logo.svg'

const Nav = () => {
   const [menuOpen,setMenuOpen]=useState(false) 
  
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
   return (
    <div>
      <nav className={`navbar ${menuOpen ? "open":" "}`}>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
        {/* Mobile NavBar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        {/* Nav Items */}
            <ul className={`nav-links ${menuOpen ? "visible":""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
      </nav>
    </div>
  )
}

export default Nav
