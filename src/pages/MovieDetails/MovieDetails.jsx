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
      ) : (
        <div className={classes.controller}>
          <div className={`${classes.details_container}`}>
            <div className={classes.details}>
              <div>
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
              <br />
              In 1996, aboard the research vessel Akademik Mstislav Keldysh,
              Brock Lovett and his team search the wreck of RMS Titanic. They
              recover a safe they hope contains a necklace with a large diamond
              known as the Heart of the Ocean. Instead, they only find a drawing
              of a young nude woman wearing the necklace. The sketch is dated
              April 14, 1912, the same day the Titanic struck the iceberg that
              caused it to sink. Rose Dawson Calvert, the woman in the drawing,
              is brought aboard Keldysh. She recounts her experiences aboard
              Titanic.
              <br />
              <br />
              <span className={classes.details_headings}>Cast</span> <br />
              LeonardoDiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances
              Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner,
              Bill Paxton
              <br />
              <br />
              <span className={classes.details_headings}>Directed by</span>{" "}
              <br />
              James Cameron
              <br />
              <br />
              <span className={classes.details_headings}>Music</span>
              <br />
              James Horner
            </div>
            <div className={classes.buttons_container}>
              <button className={classes.buttons} onClick={toBook}>
                book
              </button>
              <button className={classes.buttons}>review</button>
            </div>
             <div className={`${classes.trailer_container}`}>
            <iframe
              width="720"
              height="480"
              src="https://www.youtube.com/embed/d9MyW72ELq0"
              title="Avatar: The Way of Water | Official Trailer"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>
          </div>
         
      )}
    </div>
  );
}

export default MovieDetails;
