import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className='notFound--main'>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/">
            Return to home
        </Link>
    </main>
  )
}

export default NotFound