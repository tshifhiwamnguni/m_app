import React from 'react'

import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Profile from './pages/Profile/Profile';
import CinemaList from './pages/cinemas/CinemaList';
import MovieList from './pages/movies/MovieList';
import Booking from './pages/booking/Booking'


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
        {
          path: "/cinemaList",
          element: <CinemaList />,
        }, {
          path: "/movieList",
          element: <MovieList />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },

       
   
      ],
    },
  ]);
  

export default Router