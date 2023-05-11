import Star from "../../assets/Star.png"
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
            <Link to={`vans/${van.id}`}>View</Link>
        </li>
      </Link>
    ))

  return(
    <main className='hostVans--main'>
      <div className="dashboard-container">
        <h4>Your listed vans</h4>
        <Link to="vans">View all</Link>
      </div>
      <ul>
        {listedVansElement}
      </ul>
    </main>
  )
}

  return (
    <main className='hostDashboard--main'>
      <section className="dashboard--section-1">
        <h2>Welcome!</h2>
        <article>
          <p>Income last <Link to="income">30 days</Link></p>
          <Link to="income">Details</Link>
        </article>
          <h1>$2,260</h1>
      </section>

      <section className="dashboard--section-2">
        <article>
          <h2>Review score</h2>
          <div>
            <img src={Star} alt="star-icon" />
            <h2>5.0<span>/5</span> </h2>
          </div>
        </article>
        <Link to="reviews">Details</Link>
      </section>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={loaderData.hostvans}>
            {RenderingListedVans}
          </Await>
        </Suspense>
    </main>
  )
}

export default Dashboard
