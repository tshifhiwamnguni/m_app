import React, {useState, useEffect} from 'react'
import classes from "./MovieList.module.scss";
import { Circles } from "react-loader-spinner";
import MoviePlayCard from '../../components/moviePlayCard/MoviePlayCard'
import { fetchMovies } from "../../services/moviesService";

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
      <h1>list of cinemas</h1>
      {loader ? (
        <div className={classes.loader}>
          <Circles
            height="200"
            width="200"
            color="orange"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
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