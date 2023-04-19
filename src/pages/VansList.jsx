import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function VansList() {  
  
  const [exploreVan,setExploreVan] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setExploreVan(data.vans))
  }, [0])

  return (
    <main className='vanList-container--main'>
      <h1>Explore our van options</h1>
        <ul className='vanList--types'>
          <li> Simple </li>
          <li> Luxury </li>
          <li> Rugged </li>
          <li> Clear filters </li>
        </ul>
   
        <ul className='vansInfo-container'>
          {exploreVan.map(van => (
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