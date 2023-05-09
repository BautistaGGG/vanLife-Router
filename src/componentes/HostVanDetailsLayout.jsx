import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import Flecha from "../assets/Arrow.png"
import { gettingVan } from '../../api'

export function loader({params}){
  return gettingVan(params.id)
}

function HostVanDetailsLayout() {

  const vanSelected = useLoaderData()

    return (
      <main className='hostVansDetails--main'>
          <Link to=".." relative='path'>
            <img src={Flecha} alt="flecha para volver a la página anterior" loading='lazy' />
            <p> Back to vans </p>
          </Link>
          <section>
              <article>
                <img src={vanSelected.imageUrl} alt={vanSelected.name} />
                <div>
                  <i className={`van-type ${vanSelected.type} selected`}>{vanSelected.type}</i>
                  <h2>{vanSelected.name}</h2>
                  <p>${vanSelected.price}<span>/day</span></p>
                </div>
              </article>     
              <article className='articleDos'>
                <ul className='hostVansDetails--ul'>
                    <li>
                        <NavLink to={`.`} end className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Details                       
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`pricing`} className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`pictures`} className={({isActive}) => isActive ? "activeLink" : "LinkTag"}>
                          Pictures
                        </NavLink>
                    </li>
                </ul>    
                <Outlet context={[vanSelected]}/>
              </article> 
          </section>
      </main>
  )
}

export default HostVanDetailsLayout