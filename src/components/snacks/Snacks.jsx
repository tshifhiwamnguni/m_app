import React from "react";
import classes from "./Snacks.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { fetchSnacks } from "./../../services/snacksService";

function Snacks({ snacksSelector }) {
  const [snack, setSnack] = useState([]);

  useEffect(() => {
    fetchSnacks().then((res) => {
      setSnack(res.data.data);
    });
  }, []);

  console.log(snack);

  return (
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
                  <AiOutlinePlusCircle className={classes.icon} /> add to cart
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Snacks;
