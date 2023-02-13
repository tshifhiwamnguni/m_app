import React from "react";
import classes from "./CheckoutDetails.module.scss";
function CheckoutDetails(props) {
  return (
    <div className={classes.details}>
      <div className={classes.top}>
        <span>your booking</span>{" "}
        <button className={classes.buttons}> Cancel</button>{" "}
      </div>

      <div>
        <h1>{props.movieName}</h1>
        {/* book details */}
        <div className={classes.movie}>
          <div>
            <img src={props.movieImage} alt="shoe" />
          </div>
          <div className={classes.movie_details}>
            <span>{props.locations}</span>
            <span>date</span>
            <span>time</span>
          </div>
        </div>
        {/* seats  */}
        <div>
          your seats
          {props.seats.map((value, i) => {
            return (
              <div key={i} className={classes.seats}>
                <span>{value}</span>
                <span>R{props.price}</span>
              </div>
            );
          })}
        </div>
        {/* snacks */}
        <div>
          your snacks
          <div className={classes.seats}>
            <span>name</span>
            <span>price</span>
          </div>
        </div>
      </div>

      <div className={classes.price}>
        <span></span>
        <span>total R250</span>
      </div>
      <div className={classes.price}>
        <span></span>
        <button className={classes.buttons}>Pay</button>
      </div>
    </div>
  );
}

export default CheckoutDetails;
