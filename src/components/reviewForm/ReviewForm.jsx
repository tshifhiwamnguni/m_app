import React,{useState} from "react";
import StarRating from "../starRating/StarRating";
import classes from "./ReviewForm.module.scss";



function ReviewForm() {
const [number,  setNumber]= useState()

function rate(params) {
    setNumber(params)
    console.log(params);
}

  return (
    <div className={classes.container}>
            <h1>Review List</h1>
      <form className={classes.form}>
        <div className={classes.message}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className={classes.imp } />
        </div>
        <div className={classes.stars}>
           <StarRating  rate={rate}/>
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={50}/>
        </div>
        <div className={classes.buttons}>
          <button type="submit" className={classes.btn}>Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default ReviewForm;
