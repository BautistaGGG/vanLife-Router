import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Componentes
import Layout from "./componentes/Layout"
import HostLayout from './componentes/HostLayout'

//Pages
import Home from './pages/Home'
import About from "./pages/About"
import VansList from "./pages/VansList"
import VanDetails from "./pages/VanDetails"

/*Pages/host*/
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from './pages/host/HostVans'

/*Pages/host/id/details*/
import HostDetails from "./pages/host/vansDetails/HostDetails"
import HostPricing from "./pages/host/vansDetails/HostPricing"
import HostPictures from "./pages/host/vansDetails/HostPictures"
//Data
import "../server"
import HostVanDetailsLayout from './componentes/HostVanDetailsLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout/> }>
          
          <Route path='/' element={ <Home/> }/>
          <Route path='about' element={ <About/> }/>
          <Route path='vans' element={ <VansList/> }/>
          <Route path='vans/:id' element={ <VanDetails/> }/>
          
          <Route path='/host' element={ <HostLayout/> }>
            <Route index element={ <Dashboard/> }/>
            <Route path='income' element={ <Income/> }/>
            <Route path='reviews' element={ <Reviews/> }/>
            <Route path='vans' element={ <HostVans/> }/>            
            
            <Route path='vans/:id' element={ <HostVanDetailsLayout/> }>
              <Route index element={ <HostDetails/> }/>
              <Route path='pricing' element={ <HostPricing/> }/>
              <Route path='pictures' element={ <HostPictures/> }/>
            </Route>

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
