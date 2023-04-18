import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//COMPONENTES
import NavBar from "./componentes/NavBar"
import Footer from "./componentes/Footer"
//PAGES
import Home from './pages/Home'
import About from "./pages/About"
import Vans from "./pages/Vans"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/vans' element={ <Vans/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
