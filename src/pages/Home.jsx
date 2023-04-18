import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home--main">
        <section>
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans">
            <button className='home--btn'> Find your Van </button>
          </Link>
        </section>
    </main>
  )
}

export default Home
