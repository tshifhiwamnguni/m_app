import React, { useState,useRef } from "react";
import StarRating from "../starRating/StarRating";
import classes from "./ReviewForm.module.scss";
import { postReview } from "./../../services/reviewService";

function ReviewForm() {
  const [number, setNumber] = useState();
const message = useRef()
  function rate(params) {
    setNumber(params);
    console.log(params);
  }

  function submit() {
    let data = {
      data:{
      rating: number,
      comment: message.current.value,
      users_permissions_user: 13,
      movie: 27,}
    };

    console.log(data);

    postReview(data).then(
      (res)=>{
 console.log(res);  
      }
    )
  }

  return (
    <div className={classes.container}>
      <h1>Review List</h1>
      <div className={classes.form}>
     
        <div className={classes.stars}>
          <StarRating rate={rate} />
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={50} 
          
        ref={message}
          />
        </div>
        <div className={classes.buttons}>
          <button className={classes.btn} onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
