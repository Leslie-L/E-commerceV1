import { useRoutes,BrowserRouter } from 'react-router-dom'

import Home from './Home'
import MyAccount from './MyAccount'
import SignIn from './SignIn'
import MyOrder from './MyOrder'
import MyOrders from './MyOrder'
import NotFound from './NotFound'
import Navbar from '../Components/Navbar'

import '../App.css'
const AppRoute = () =>{
  let routes = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/my-account',
      element:<MyAccount/>
    },
    {
      path:'/my-order',
      element:<MyOrder/>
    },
    {
      path:'/my-orders',
      element:<MyOrders/>
    },
    {
      path:'/sign-in',
      element:<SignIn/>
    },
    {
      path:'/*',
      element:<NotFound/>
    }
  ])
  return routes;
}

function App() {
  

  return (
    <>
      <BrowserRouter>
        <AppRoute/>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
