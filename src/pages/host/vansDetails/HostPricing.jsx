import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostPricing() {
  
  const [vanSelected,setVanSelected] = useOutletContext()

  return (
    <main className='hostDetails--main'>
      {vanSelected == null ? 
      <h1>Loading Price...</h1> :
        <span>
         <p className='price'>${vanSelected.price} <span> /day </span> </p>
       </span>
      }      
    </main>
  )
}

export default HostPricing