import React from 'react'

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Profile from './pages/Profile/Profile';



const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
       
   
      ],
    },
  ]);
  

export default Router