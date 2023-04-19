import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//COMPONENTES
import NavBar from "./componentes/NavBar"
import Footer from "./componentes/Footer"
//PAGES
import Home from './pages/Home'
import About from "./pages/About"
import VansList from "./pages/VansList"
import VanDetails from "./pages/VanDetails"
//DATA
import "../server"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/vans' element={ <VansList/> }/>
        <Route path='/vans/:id' element={ <VanDetails/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
