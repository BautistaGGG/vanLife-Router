import React, { Suspense } from 'react'
import { Link, useLocation, useLoaderData, defer, Await } from 'react-router-dom'
import Flecha from "../assets/Arrow.png"
import { gettingVan } from "../../api"
import { requiredAuth } from '../../utils'

export async function loader({ params, request }){
  await requiredAuth(request)
  return defer({ gettingVans: gettingVan(params.id) }) 
}

function VanDetails() {
  const location = useLocation()

  const vanDetailsPromise = useLoaderData()

  const conditionalBackToVansList = location.state.searchParam != "" ? 
  <p> Back to {location.state.tipoDeVan} vans </p> :
  <p> Back to all vans </p>

  function RenderingVanDetails(vans) {
    return(
        <main className='vanDetails--main'>
        <Link to={location.state.searchParam != ""  ?  `../?${location.state.searchParam}`  :  ".."} relative='path'>
          <img src={Flecha} alt="flecha para volver a la página anterior" loading='lazy'/>
          {conditionalBackToVansList}
        </Link>

        <article className='vanDetails--container'>
          <img src={vans.imageUrl} alt={vans.name} loading='lazy' />
          <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
          <h1>{vans.name}</h1>
          <h4>${vans.price} <span>/day</span> </h4>
          <p>{vans.description}</p>
          <button>Rent this van</button>
        </article>
      </main>
    )
  }

  return (
    <Suspense fallback={<h1>Loading van details...</h1>}>
      <Await resolve={vanDetailsPromise.gettingVans}>
        {RenderingVanDetails}
      </Await>
    </Suspense>
  )
}

export default VanDetails