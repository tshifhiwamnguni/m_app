import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TheatreList from "../../components/theatres/TheatreList";
import CinemaList from "../../components/cinemas/CinemaList";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";


function Home() {
  
  const [type, setType] = useState("cinema");
 

  return (
    <div className={classes.home}>
      <Slider />
      <div className={classes.main}>
        {type === "theatre" ? <TheatreList /> : <CinemaList />}
      </div>

      <div className={classes.buttons}>
        <div />
        <button className={classes.primary} onClick={() => setType("cinema")}>
          {" "}
          cinema
        </button>
    
          OR
          <button className={classes.primary} onClick={() => setType("theatre")}>
            {" "}
            theatre
          </button>
          <div />
        </div>
      </div>
  
  );
}

export default Home;
