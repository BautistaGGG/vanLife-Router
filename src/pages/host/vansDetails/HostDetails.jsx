import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostDetails() {

  const [vanSelected,setVanSelected] = useOutletContext()

  return (
    <main className='hostDetails--main'>
      {vanSelected == null ? 
      <h1>Loading Details...</h1> :
        <span>
         <p>Name: <span>{vanSelected.name}</span> </p>
         <p>Category: <span>{vanSelected.type}</span> </p>
         <p>Description: <span>{vanSelected.description}</span> </p>
         <p>Visibility: <span>Public</span> </p>
       </span>
      }      
    </main>
  )
}

export default HostDetails