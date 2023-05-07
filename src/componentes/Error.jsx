import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  
  const errorProperties = useRouteError()
  
  return (
    <main className='error--main'>
        <h1> ERROR: {errorProperties.message}</h1>
        <pre>{errorProperties.status} - {errorProperties.statusText}</pre>
    </main>
  )
}

export default Error