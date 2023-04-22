import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from "../assets/logo.png"

function NavBar() {

  return (
    <header>
        <nav>
            <NavLink to="/" className='logo'>
                <img src={LogoImg} alt="logo" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/host" className={({isActive}) => isActive ? "activeLink" : "LinkTag"} >
                         Host 
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "activeLink" : "LinkTag" }>
                         About
                     </NavLink>
                </li>  

                <li>
                    <NavLink to="/vans" className={({isActive}) => isActive ? "activeLink" : "LinkTag" }>
                         Vans 
                    </NavLink>
                </li>  
            </ul>
        </nav>
  </header>
  )
}

export default NavBar