import React from "react";
import classes from "./PlayCard.module.scss";

import { useNavigate } from "react-router-dom";

function PlayCard(props) {
  const navigate = useNavigate();

  function selectMovie() {
    console.log('play ' ,props);
      localStorage.setItem('MId', props.data.id)
     localStorage.setItem('MPrice',  props.data.attributes.price)
     localStorage.setItem('MName',  props.data.attributes.title)
     localStorage.setItem('Image',  props.data.attributes.showImage)
      navigate(`/playDetails/${props.data.id}`)
    
   }

   console.log("data", props);
  return (
    <div>
      <div className={classes.movie} onClick={selectMovie}>
        <img src={props.data.attributes.showImage} alt="show" />

        <div>
          <h1>{props?.data.attributes.title}</h1>
          <h3>{props?.data.attributes.surbub}</h3>
          <h3>{props?.data.attributes.city}</h3>
          <div className={classes.genre}>
            {props?.data?.attributes?.genres?.data.map((el, i) => {
              return <h3 key={i}> {el.attributes.name}</h3>;
            })}
          </div>
          <h3>{props?.data.attributes.province}</h3>
            <h4>{props?.data.attributes.duration} mins</h4>
        </div>
      </div>
    </div>
  );
}

export default PlayCard;
