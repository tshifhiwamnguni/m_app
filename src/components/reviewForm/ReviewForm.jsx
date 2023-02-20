import React, { useState, useRef, useEffect } from "react";
import StarRating from "../starRating/StarRating";
import classes from "./ReviewForm.module.scss";
import { postReview } from "./../../services/reviewService";

function ReviewForm() {
  const [number, setNumber] = useState();
 const [image, setImage] = useState();
 const [name, setName] = useState();

  const message = useRef();

useEffect(()=>{
  setImage(localStorage.getItem('Image'))
  setName(localStorage.getItem('MName'))
},[])


  function rate(params) {
    setNumber(params);
    console.log(params);
  }

  function submit() {
    let data = {
      data: {
        rating: number,
        comment: message.current.value,
        users_permissions_user: 13,
        movie: localStorage.getItem("MId"),
      },
    };

    console.log(data);

    postReview(data).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className={classes.container}>
      <h1>Review List</h1>
      <div className={classes.form}>
        <img src={image}/>
        <div>{name}</div>
        <div className={classes.stars}>
          <StarRating rate={rate} />
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={50} ref={message} />
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
