import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from "../assets/logo.png"
import avatarIcon from "../assets/avatarIcon.svg"
function NavBar() {

function logginOut(){
    localStorage.removeItem("loggedIn")
}

  return (
    <header>
        <nav>
            <NavLink to="/" className='logo'>
                <img src={LogoImg} alt="logo" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="host" className={({isActive}) => isActive ? "activeLink" : "LinkTag"} >
                         Host 
                    </NavLink>
                </li>

                <li>
                    <NavLink to="about" className={({isActive}) => isActive ? "activeLink" : "LinkTag" }>
                         About
                     </NavLink>
                </li>  

                <li>
                    <NavLink to="vans" className={({isActive}) => isActive ? "activeLink" : "LinkTag" }>
                         Vans 
                    </NavLink>
                </li>  
                <li>
                    <NavLink to="login" className={({isActive}) => isActive ? "activeLink" : "LinkTag" }>
                        <img src={avatarIcon} alt="iconAvatar" className='iconAvatar' />
                    </NavLink>
                </li>  
                <li>
                    <button onClick={logginOut}>
                       Salir
                    </button>
                </li>
            </ul>
        </nav>
  </header>
  )
}

export default NavBar