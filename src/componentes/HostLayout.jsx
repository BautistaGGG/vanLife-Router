import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <>
        <ul className='dashboard--ul'>
            <li>
                <NavLink to="/host" end className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="income" className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                    Income
                </NavLink>
            </li>
            <li>
                <NavLink to="vans" className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                    Vans
                </NavLink>
            </li>
            <li>
                <NavLink to="reviews" className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                    Reviews
                </NavLink>
            </li>
        </ul>
        <Outlet/>
    </>
  )
}

export default HostLayout