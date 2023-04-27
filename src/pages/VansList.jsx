import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function VansList() {  
  
  const [exploreVan,setExploreVan] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setExploreVan(data.vans))
  }, [0])

  const [searchParams,setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const filtrandoResultados = exploreVan.filter(van => 
    typeFilter ? 
    van.type === typeFilter :
    exploreVan
  )


  return (
    <main className='vanList-container--main'>
      <h1>Explore our van options</h1>
        <ul className='vanList--types'>
          <li> 
            <Link to="?type=simple">Simple</Link>
          </li>
          <li> 
            <Link to="?type=luxury">Luxury</Link>
          </li>
          <li> 
            <Link to="?type=rugged">Rugged</Link>
          </li>
          <li>
            <Link to=".">
               Clear filters
            </Link>
          </li>
        </ul>
   
        <ul className='vansInfo-container'>
          {filtrandoResultados.map(van => (
            <li key={van.id} className='vanInfo-container'>
              <Link to={van.id}>
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
    </main>
  )
}

export default VansList

/*
        
*/