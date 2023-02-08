import React, { useEffect, useState } from "react";
import classes from "./CinemaList.module.scss";
import { Circles } from "react-loader-spinner";

import { fetchCinemas } from "../../services/moviesService";

import CinemaCard from "../../components/cinemaCard/CinemaCard";


function CinemaList() {
  const [cinemas, setCinemas] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchCinemas()
      .then((res) => {
        setLoader(true);
        setCinemas(res.data.data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  

  console.log(cinemas);
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
          {cinemas.map((element, i) => {
            return (
            <CinemaCard key={i} data={element}/>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CinemaList;
