import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../api'
import { requiredAuth } from '../../../utils'

export async function loader({request}){
  await requiredAuth(request)
  return getHostVans()
}

function HostVans() {
  const hostVans = useLoaderData()

  const ListedVansElement = hostVans.map(van => (
                  <Link to={`${van.id}`} key={van.id}>
                    <li>
                        <img src={van.imageUrl} alt={van.name}/>
                        <div>
                          <h3>{van.name}</h3>
                          <p>${van.price}/day</p>
                        </div>
                    </li>
                  </Link>
            ))
          
  return (
    <main className='hostVans--main'>
      <h1>Your listed vans</h1> 
      <ul>
        {ListedVansElement}
      </ul>
    </main>
  )
}

export default HostVans