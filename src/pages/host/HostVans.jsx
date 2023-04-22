import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HostVans() {

  const [listedVans,setListedVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setListedVans(data.vans))
  },[0])

  const ListedVansElement = listedVans.map(van => (
                  <Link to={`/host/vans/${van.id}`} key={van.id}>
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
        {listedVans.length === 0 ? <h2>Loading Data...</h2> : ListedVansElement}
      </ul>
    </main>
  )
}

export default HostVans