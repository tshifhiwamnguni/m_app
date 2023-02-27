import React, { useEffect, useState } from "react";
import classes from "./MovieDetails.module.scss";
import { useNavigate, useParams } from "react-router-dom";

import { fetchOneMovie } from "../../services/moviesService";
import MovieDetailSkeleton from "../../components/MovieDetailSkeleton/MovieDetailSkeleton";

function MovieDetails() {
  const initMovieDetails = {
    description: "",
    duration: 0,
    genres: { data: [{ id: "", attributes: "" }] },
    movieImage: "",
    price: 200,
    title: "0",
  };

  let { id } = useParams();
  const [movie, setMovie] = useState(initMovieDetails);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  function toBook() {
    localStorage.setItem("MId", id);
    localStorage.setItem("MPrice", movie.price);
    localStorage.setItem("MName", movie.title);
    localStorage.setItem("Image", movie.movieImage);
    navigate("/booking");
  }

  function toReviews() {
    navigate("/reviews");
  }

  useEffect(() => {
    console.log(id);
    fetchOneMovie(id)
      .then((data) => {
        setLoader(true);
        setMovie(data.data.data.attributes);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className={classes.container}>
      {loader ? (
        <div className={classes.controller}>
        <div className={`${classes.details_container} `}>
          <div className={classes.details}>
            <MovieDetailSkeleton />
          </div>
          <div className={`${classes.trailer_container}`}>
            <img
              className={`${classes.skeleton} ${classes.img}`}
              alt=""
              id="cover-img"
            />
          </div>
          </div>
        </div>
      ) : (
        <div className={classes.controller}>
          <div className={`${classes.details_container}`}>
            <div className={classes.top}>
                <h1>{movie.title}</h1>
                <br />
                {movie.genres.data.map((element, id) => {
                  return (
                    <span key={id}> {element.attributes.name} &nbsp;</span>
                  );
                })}
                <br />
                {movie.duration} mins
              </div>
            <div className={`${classes.details} `}>
              
              <br />
              {movie.description}
              <br />
              <br />
              <span className={classes.details_headings}>Province</span> <br />
              {movie?.cinema.data.attributes.province}
              <br />
              <br />
              <span className={classes.details_headings}>city</span> <br />
              {movie?.cinema.data.attributes.city}
              <br />
              <br />
              <span className={classes.details_headings}>suburb</span>
              <br />
              {movie?.cinema.data.attributes.surbub}
            </div>
            <div className={classes.buttons_container}>
              <button className={classes.buttons} onClick={toBook}>
                book
              </button>
              <button className={classes.buttons} onClick={toReviews}>
                {" "}
                review
              </button>
            </div>
            
          </div>
          <div className={`${classes.trailer_container}`}>
              <iframe
                width="640"
                height="560"
                src="https://www.youtube.com/embed/d9MyW72ELq0"
                title="Avatar: The Way of Water | Official Trailer"
                frameBorder="0"
                allow="autoplay"
              />
            </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
