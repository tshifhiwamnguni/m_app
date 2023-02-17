import React from "react";
import StarRating from "../starRating/StarRating";
import { AiFillStar } from "react-icons/ai";
import classes from "./ReviewList.module.scss";
import ListCardSkeleton from "../listCardSkeleton/ListCardSkeleton";
function ReviewList() {
  return (
    <div className={classes.container}>
      <h1>Review List</h1>
      <ListCardSkeleton />

      <div className={classes.card}>
        <div>brandon</div>
        <div>
          <AiFillStar />
        </div>

        <div>this movie was awesome and i would recommend it to anyone </div>
      </div>
    </div>
  );
}

export default ReviewList;
