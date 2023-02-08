import React from "react";
import classes from "./MoviePlayCard.module.scss";

import { useNavigate } from "react-router-dom";

function MoviePlayCard(props) {
  const navigate = useNavigate();

  function selectMovie() {
    console.log(props);
      localStorage.setItem('MId', props.data.id)
     localStorage.setItem('MPrice',  props.data.attributes.price)
     localStorage.setItem('MName',  props.data.attributes.title)
     localStorage.setItem('Image',  props.data.attributes.movieImage)
      navigate('/booking')
    
   }

  console.log("data ", props.data.attributes.genres.data);
  return (
    <div>
      <div className={classes.movie} onClick={selectMovie}>
        <img src={props.data.attributes.movieImage} alt="show" />

        <div>
          <h1>{props.data.attributes.title}</h1>
          <h3>{props.data.attributes.surbub}</h3>
          <h3>{props.data.attributes.city}</h3>
          <div className={classes.genre}>
            {props.data.attributes.genres.data.map((el, i) => {
              return <div key={i}> {el.attributes.name}</div>;
            })}
          </div>
          <h3>{props.data.attributes.province}</h3>
            {props.data.attributes.duration} mins
        </div>
      </div>
    </div>
  );
}

export default MoviePlayCard;
