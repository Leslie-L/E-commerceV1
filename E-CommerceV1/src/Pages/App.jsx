import { useRoutes,BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider } from '../Context'

import Home from './Home'
import MyAccount from './MyAccount'
import SignIn from './SignIn'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import Navbar from '../Components/Navbar'


import '../App.css'
import CheckoutSideMenu from '../Components/CheckoutSideMenu'
const AppRoute = () =>{
  let routes = useRoutes([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/:category',
      element:<Home/>
    },
    {
      path:'/my-account',
      element:<MyAccount/>
    },
    {
      path:'/my-orders',
      element:<MyOrders/>
    },
    {
      path:'/my-order/last',
      element:<MyOrder/>
    },
    {
      path:'/my-order/:id',
      element:<MyOrder/>
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
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoute/>
          <Navbar/>
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
