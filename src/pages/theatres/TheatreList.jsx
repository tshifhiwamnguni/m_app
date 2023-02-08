import React, { useEffect, useState } from "react";
import classes from "./TheatreList.module.scss";
import { Circles } from "react-loader-spinner";
import { fetchTheatres } from "../../services/theatreService";
function TheatreList() {
  const [theatre, setTheatre] = React.useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchTheatres()
      .then((res) => {
        setTheatre(res.data.data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log(theatre);
  return (
    <div>
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
        <div>
          <div className={classes.container}>
            <h1>scroll</h1>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((element, i) => {
              return (
                <div key={i} className={classes.movie}>
                  theatre
                </div>
              );
            })}
            
          </div>
          
        </div>
      )}scroll
    </div>
  );
}

export default TheatreList;
