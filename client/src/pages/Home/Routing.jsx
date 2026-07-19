import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    }
])

const Routing = () => {
  return (
    <div>Routing</div>
  )
}

export default Routing;