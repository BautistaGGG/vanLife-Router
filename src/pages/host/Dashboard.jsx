import React, {Suspense} from 'react'
import { Link, defer, Await, useLoaderData} from 'react-router-dom'
import { getHostVans } from '../../../api'
import { requiredAuth } from '../../../utils'

export async function loader({ request }) {
  await requiredAuth(request)
  return defer({ hostvans: getHostVans() })
}

/* TERMINAR EL DISEÑO SEGUN SE LO VE EN FIGMA */

function Dashboard() {

 const loaderData = useLoaderData()

 function RenderingListedVans(vans) {
    const listedVansElement = vans.map((van) => (
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

  return(
    <main className='hostVans--main'>
      <h4>Your listed vans</h4>
      <ul>
        {listedVansElement}
      </ul>
    </main>
  )
}

  return (
    <main className='hostDashboard--main'>
        <h1>DashboardPage</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={loaderData.hostvans}>
            {RenderingListedVans}
          </Await>
        </Suspense>
    </main>
  )
}

export default Dashboard
