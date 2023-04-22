import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'
import Flecha from "../assets/Arrow.png"

function HostVanDetailsLayout() {

    const parametro = useParams()
    
    const [vanSelected,setVanSelected] = useState(null)
    
    useEffect(() => {
      fetch(`/api/host/vans/${parametro.id}`)
        .then(res => res.json())
        .then(data => setVanSelected(data.vans[0]))
    },[0])

    return (
      <main className='hostVansDetails--main'>
          <Link to="/host/vans">
            <img src={Flecha} alt="flecha para volver a la página anterior" loading='lazy' />
            <p> Back to vans </p>
          </Link>
          <section>
            {vanSelected !== null ? 
              <article>
                <img src={vanSelected.imageUrl} alt={vanSelected.name} />
                <div>
                  <i className={`van-type ${vanSelected.type} selected`}>{vanSelected.type}</i>
                  <h2>{vanSelected.name}</h2>
                  <p>${vanSelected.price}<span>/day</span></p>
                </div>
              </article> : 
              <h2>Loading VanData...</h2>}      
              <article className='articleDos'>
                <ul className='hostVansDetails--ul'>
                    <li>
                        <NavLink 
                          to={`.`}
                          end
                          className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to={`pricing`}
                          className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                          to={`pictures`}
                          className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Pictures
                        </NavLink>
                    </li>
                </ul>    
                <Outlet/>
              </article> 
          </section>
      </main>
  )
}

export default HostVanDetailsLayout