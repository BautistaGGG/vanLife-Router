import React from 'react'
import ImageAbout from "../assets/imageAbout.svg"
import { Link } from 'react-router-dom'

function About() {
  return (
    <main className='about--main'>
      <img src={ImageAbout} alt="Men in a VAN" />
      <section>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉) 
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <article className='about--article'>
          <h4>Your destination is waiting.</h4>
          <h4>Your van is ready.</h4>
          <Link to="/vans" className=''>
            <button>Explore our vans</button>
          </Link>
        </article>
      </section>
    </main>
  )
}

export default About