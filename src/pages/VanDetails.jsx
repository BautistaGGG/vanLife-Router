import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Flecha from "../assets/Arrow.png"

function VanDetails() {

  const [vanSelected,setVanSelected] = useState(null)

  const parametro = useParams()

  useEffect(() => {
    fetch(`/api/vans/${parametro.id}`)
      .then(res => res.json())
      .then(data => setVanSelected(data.vans))
  },[parametro.id])

  return (
    <main className='vanDetails--main'>
      <Link to="/vans">
        <img src={Flecha} alt="flecha para volver a la página anterior" loading='lazy' />
        <p> Back to vans </p>
      </Link>
      {vanSelected ? (
                  <article className='vanDetails--container'>
                    <img src={vanSelected.imageUrl} alt={vanSelected.name} loading='lazy' />
                    <i className={`van-type ${vanSelected.type} selected`}>{vanSelected.type}</i>
                    <h1>{vanSelected.name}</h1>
                    <h4>${vanSelected.price} <span>/day</span> </h4>
                    <p>{vanSelected.description}</p>
                    <button>Rent this van</button>
                  </article>
      ) : <h1>Getting Data...</h1>
      }
    </main>
  )
}

export default VanDetails