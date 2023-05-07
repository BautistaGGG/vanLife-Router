import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route  
  } from 'react-router-dom'

//Componentes
import Layout from "./componentes/Layout"
import HostLayout from './componentes/HostLayout'
import Error from "./componentes/Error"

//Pages
import Home from './pages/Home'
import About from "./pages/About"
import VansList from "./pages/VansList"
import VanDetails, {loader as vanDetailsLoader} from "./pages/VanDetails"
import NotFound from './pages/NotFound'
import Login, {loader as loginLoader, action as actionLogin} from './pages/Login'

/*Pages/host*/
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans, {loader as hostVansLoader} from './pages/host/HostVans'

/*Pages/host/id/details*/
import HostDetails from "./pages/host/vansDetails/HostDetails"
import HostPricing from "./pages/host/vansDetails/HostPricing"
import HostPictures from "./pages/host/vansDetails/HostPictures"

//Data
import "../server"
import HostVanDetailsLayout, {loader as hostVansDetailsLayoutLoader} from './componentes/HostVanDetailsLayout'

//Loader
import { loader as VanListLoader } from './pages/VansList'

//Utils
import { requiredAuth } from "../utils"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout/> }>
    
    <Route index element={ <Home/> }/>
      <Route path='about' element={ <About/> }/>
      <Route 
        path='login' 
        element={ <Login/> }
        errorElement={ <Error/> }
        action={actionLogin}
        loader={loginLoader}
      />
      <Route 
        path='vans' 
        element={ <VansList/> } 
        errorElement={ <Error/> } 
        loader={VanListLoader} 
      />
      <Route 
        path='vans/:id' 
        element={ <VanDetails/> }
        loader={vanDetailsLoader}
      />

      <Route path='/host' element={ <HostLayout/> }>
      <Route
        index
        element={ <Dashboard /> }
        errorElement={ <Error/> }
        loader={async ({request}) => await requiredAuth(request)}
      />
        <Route 
          path='income' 
          element={ <Income/> }
          loader={ async ({request}) => await requiredAuth(request) }
        />
        <Route 
          path='reviews' 
          element={ <Reviews/> }
          loader={ async ({request}) => await requiredAuth(request) }
        />
        <Route 
          path='vans' 
          element={ <HostVans/> }
          loader={hostVansLoader}
        />            
        
        <Route 
          path='vans/:id' 
          element={ <HostVanDetailsLayout/> }
          loader={hostVansDetailsLayoutLoader}
          >
          <Route 
            index 
            element={ <HostDetails/> }
            loader={ async ({request}) => await requiredAuth(request) }
          />
          <Route 
            path='pricing' 
            element={ <HostPricing/> }
            loader={ async ({request}) => await requiredAuth(request) }
          />
          <Route 
            path='pictures' 
            element={ <HostPictures/> }
            loader={ async ({request}) => await requiredAuth(request) }
          />
        </Route>
    </Route>
    <Route path='*' element={ <NotFound/> }/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
