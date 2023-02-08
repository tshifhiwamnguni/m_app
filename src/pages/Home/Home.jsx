import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import TheatreList from "../../components/theatres/TheatreList";
// import CinemaList from "../../components/cinemas/CinemaList";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";


function Home() {
  
  const navigate = useNavigate();
 

  return (
    <div className={classes.home}>
      <Slider />
      <div className={classes.main}>
       <h1>Please select ypur viewing experience</h1>
        <div className={classes.buttons}>
        <div />
        <button className={classes.primary} onClick={() =>{ navigate('cinemaList')}}>
          {" "}
          Cinema
        </button>
    
          OR
          <button className={classes.primary} onClick={() => {}}>
            {" "}
            Theatre
          </button>
          <div />
        </div>
      </div>

      </div>
  
  );
}

export default Home;
