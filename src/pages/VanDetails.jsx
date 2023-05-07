import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import Flecha from "../assets/Arrow.png"
import { gettingVans } from "../../api"
import { requiredAuth } from '../../utils'

export async function loader({ params, request }){
  await requiredAuth(request)
  return gettingVans(params.id)
}

function VanDetails() {
  const location = useLocation()

  const vanDetails = useLoaderData()

  const conditionalBackToVansList = location.state.searchParam != "" ? 
  <p> Back to {location.state.tipoDeVan} vans </p> :
  <p> Back to all vans </p>

  return (
    <main className='vanDetails--main'>
      <Link 
        to={location.state.searchParam != ""  ?  `../?${location.state.searchParam}`  :  ".."} 
        relative='path'
      >
          <img 
            src={Flecha} 
            alt="flecha para volver a la página anterior" 
            loading='lazy' />
          {conditionalBackToVansList}
      </Link>
      <article className='vanDetails--container'>
        <img src={vanDetails.imageUrl} alt={vanDetails.name} loading='lazy' />
        <i className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</i>
        <h1>{vanDetails.name}</h1>
        <h4>${vanDetails.price} <span>/day</span> </h4>
        <p>{vanDetails.description}</p>
        <button>Rent this van</button>
      </article>
    </main>
  )
}

export default VanDetails