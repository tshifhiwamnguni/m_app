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
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Checkout from './pages/checkout/Checkout';
import Reviews from './pages/reviews/Reviews';


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
        ,
        {
          path: "/movieDetails/:id",
          element: <MovieDetails />,
        },
        {
          path: "/booking",
          element: <Booking />,
        }, {
          path: "/checkout",
          element: <Checkout />,
        }, {
          path: "/reviews",
          element: <Reviews />,
        },
      ],
    },
  ]);
  

export default Router