import React, {useState, useEffect} from 'react'
import classes from "./MovieList.module.scss";
import { Circles } from "react-loader-spinner";
import MoviePlayCard from '../../components/moviePlayCard/MoviePlayCard'
import { fetchMovies } from "../../services/moviesService";
import SkeletonCard from '../../components/MovieSkeletonCard/SkeletonCard';

function MovieList() {
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


  return (
    <div className={classes.main_container}>
      <h1>list of Movies</h1>
      {loader ? (
        <div className={classes.container}>
        {
          [1,1,1,1,1,1,1,1,1,1].map((value, index) => (
            <SkeletonCard key={index}/> 
          ))}
          </div>
      ) : (
        <div className={classes.container}>
          {movies.map((element, i) => {
            return (
            <MoviePlayCard key={i} data={element}/>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default MovieList