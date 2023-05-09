import React, { useState, Suspense } from 'react'
import { 
   Link,
   useSearchParams,
   useLoaderData,
   defer,
   Await
} from 'react-router-dom'
import { gettingVans } from "../../api"

export function loader() {
 return defer( {vans:gettingVans() })
}

function VansList() {
  
  const [searchParams,setSearchParams] = useSearchParams()
 
  const gettingVansDataPromise = useLoaderData()
  
  const typeFilter = searchParams.get("type")


  function handleFilterChange(key,value){
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else{
        prevParams.set(key,value)
      }
      return prevParams 
    })
  }

  function renderingVansElement(vans){
      const filtrandoResultados = vans.filter(van => 
        typeFilter ? 
        van.type === typeFilter :
        vans
      )

      return (
        <>
          <ul className='vanList--types'>
            <li> 
              <button 
                className={typeFilter === "simple" ? "van-type simple selected" : "van-type simple"}
                onClick={() => handleFilterChange("type", "simple")}>Simple</button>
            </li>
            <li> 
              <button 
                className={typeFilter === "luxury" ? "van-type luxury selected" : "van-type luxury"}
                onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
            </li>
            <li> 
              <button 
                className={typeFilter === "rugged" ? "van-type rugged selected" : "van-type rugged"}
                onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
            </li>
            <li>
              {typeFilter && 
                <button 
                  className="van-type clear-filters"
                  onClick={() => handleFilterChange("type", null)}>
                  Clear filters
                </button>
              }
            </li>
          </ul>
          <ul className='vansInfo-container'>
            {filtrandoResultados.map(van => (
              <li key={van.id} className='vanInfo-container'>
                <Link to={van.id} state={{searchParam: searchParams.toString(), tipoDeVan: typeFilter}}>
                  <img src={van.imageUrl} alt={van.name} />
                  <div className='section--namePrice'>
                    <h4>{van.name}</h4>
                    <p>${van.price}<span>/day</span> </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </li>
            ))} 
          </ul>
        </>  
      )
    }

  return (
    <main className='vanList-container--main'>
        <Suspense fallback={<h1>Loading Data...</h1>}>
          <h1>Explore our van options</h1>
          <Await resolve={gettingVansDataPromise.vans}>
            {renderingVansElement}
          </Await>
        </Suspense>
    </main>
  )
}

export default VansList

/*
        
*/