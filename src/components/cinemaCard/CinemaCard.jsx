import React from 'react'
import classes from "./CinemaCard.module.scss";
import second from '../../assets/images/download.png';
import { useNavigate } from "react-router-dom";
function CinemaCard(props) {
    const navigate = useNavigate();
  function toMovies() {
    localStorage.setItem("PlaceId", props.data.id);
    localStorage.setItem("type", "cinema");
    localStorage.setItem("PlaceName", props.data.attributes.name);
    localStorage.setItem("Location", props.data.attributes.surbub);
    navigate("../movieList");
  }


  return (
    <div className={classes.movie}  onClick={toMovies}>
               
    <img src={second} alt="show" />
       
       <div>
          <h1>{props.data.attributes.name}</h1>
         <h3>{props.data.attributes.surbub}</h3>
       <h3>{props.data.attributes.city}</h3>
       <h3>{props.data.attributes.province}</h3>
         
       </div>
     </div>
  )
}

export default CinemaCard