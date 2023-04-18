import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../assets/logo.png"

function NavBar() {
  return (
    <header>
        <nav>
            <Link to="/" className='logo'>
                <img src={LogoImg} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/" className='LinkTag'> Home </Link>
                </li>
                <li>
                    <Link to="/about" className='LinkTag'> About </Link>
                </li>  
                <li>
                    <Link to="/vans" className='LinkTag'> Vans </Link>
                </li>  
            </ul>
        </nav>
  </header>
  )
}

export default NavBar