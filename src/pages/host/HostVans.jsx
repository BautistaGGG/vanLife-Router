import React, {Suspense} from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getHostVans } from '../../../api'
import { requiredAuth } from '../../../utils'

export async function loader({request}){
  await requiredAuth(request)
  return defer({ hostVans: getHostVans() }) 
}

function HostVans() {
  const hostVansPromise = useLoaderData()

  function RenderingListedVansElement(vans){
   const hostVansElements = vans.map(van => (
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
            {hostVansElements}
          </ul>
      </main>
    )
  } 
          
  return (
      <Suspense fallback={<h1>Loading vans data...</h1>}>
        <Await resolve={hostVansPromise.hostVans}>
            {RenderingListedVansElement}
        </Await>
      </Suspense>
  )
}

export default HostVans