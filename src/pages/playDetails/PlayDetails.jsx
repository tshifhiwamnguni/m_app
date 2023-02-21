import React, { useEffect, useState } from "react";
import classes from "./PlayDetails.module.scss";
import { useNavigate, useParams } from "react-router-dom";

import { fetchOnePlay } from "../../services/theatreService";
import MovieDetailSkeleton from "../../components/MovieDetailSkeleton/MovieDetailSkeleton";

function PlayDetails() {
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
  const [image, setImage] = useState()
  
  const navigate = useNavigate();

  function toBook() {
    localStorage.setItem("MId", id);
    localStorage.setItem("MPrice", movie.price);
    localStorage.setItem("MName", movie.title);
    
    navigate("/booking");
  }

  function toReviews() {
    navigate("/reviews");
  }

  useEffect(() => {
    setImage(localStorage.getItem('Image'))
    console.log(id);
    fetchOnePlay(id)
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

  console.log(image);

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
              {movie.description}
              <br />
              <br />
              <span className={classes.details_headings}>Province</span> <br />
              {movie?.theatre?.data.attributes?.province}
              <br />
              <br />
              <span className={classes.details_headings}>city</span> <br />
              {movie?.theatre?.data.attributes?.city}
              <br />
              <br />
              <span className={classes.details_headings}>suburb</span>
              <br />
              {movie?.theatre?.data.attributes?.surbub}
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

            <div className={classes.trailer_container}>
                <img src={image}  className={classes.img}/>

          </div>
            
         
          </div>


        </div>
      )}
    </div>
  );
}

export default PlayDetails;
