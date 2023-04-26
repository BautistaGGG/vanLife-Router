import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostPictures() {

  const [vanSelected,setVanSelected] = useOutletContext()

  return (
    <main className='hostDetails--main'>
      {vanSelected == null ? 
      <h1>Loading Picture...</h1> :
        <span>
         <img src={vanSelected.imageUrl} alt={vanSelected.name} className='littleImg'/>
       </span>
      }      
    </main>
  )
}

export default HostPictures