import React from "react";
import classes from "./Snacks.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { fetchSnacks } from "./../../services/snacksService";
import SnackSkeleton from "../SnacksSkeleton/SnackSkeleton";

function Snacks({ snacksSelector }) {
  
  const [snack, setSnack] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchSnacks()
      .then((res) => {
        setLoader(true);
        setSnack(res.data.data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div>
      {loader ? (
        <div className={classes.snacks}>
          {[1, 1, 1, 1, 1, 1].map((snack, i) => {
            return <SnackSkeleton  key={i}/>;
          })}
        </div>
      ) : (
        <div className={classes.snacks}>
          {snack.map((element, i) => {
            return (
              <div key={i} className={classes.item}>
                <div>
                  <h1>{element.attributes.name}</h1>
                  <img
                    className={classes.imgs}
                    src={element.attributes.snackImage}
                    alt="show"
                  />
                  <h3>R{element.attributes.price}</h3>
                  <div className={classes.quantity}>
                    <div
                      className={classes.quantity__item}
                      onClick={() => {
                        snacksSelector(element);
                      }}
                    >
                      <AiOutlinePlusCircle className={classes.icon} /> add to
                      cart
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Snacks;
