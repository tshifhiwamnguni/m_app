import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import TheatreList from "../../components/theatres/TheatreList";
// import CinemaList from "../../components/cinemas/CinemaList";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";
import MoviePlayCard from "../../components/moviePlayCard/MoviePlayCard";
import { fetchMovies } from "../../services/moviesService";
import SkeletonCard from "../../components/MovieSkeletonCard/SkeletonCard";

function Home() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((res) => {
        setLoader(true);
        setMovies(res.data.data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log(movies);
  return (
    <div className={classes.home}>
      <Slider />

      <div className={classes.main}>
        {loader ? (
          
          <div className={classes.main}>
            {
            [1,1,1,1,1,1,1].map((value, index) => (
              
                  <SkeletonCard  key={index}/>
            
              
              
            ))}
            
          </div>
        ) : (
          <div className={classes.main}>
            {movies.map((value, index) => (
              <MoviePlayCard data={value} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
