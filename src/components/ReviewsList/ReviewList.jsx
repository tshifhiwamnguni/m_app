import React, { useEffect, useState } from "react";
import StarRating from "../starRating/StarRating";
import { AiFillStar } from "react-icons/ai";
import classes from "./ReviewList.module.scss";
import ListCardSkeleton from "../listCardSkeleton/ListCardSkeleton";

import { getReview } from "./../../services/reviewService";
import StarsView from "../starsView/StarsView";

function ReviewList() {
  const initData = {
    id: "",
    attributes: {
      comment: "",
      rating: '',
      users_permissions_user: {
        data: {
          attributes: {
            firstname: "",
            lastname: "",
          
          }
        }
      }
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const [reviews, setReviews] = useState([initData]);
  useEffect(() => {
    getReview()
      .then((res) => {
        setIsLoading(true);
        console.log(res.data.data);
        setReviews(res.data.data);
      })
      .finally(() => {
        setIsLoading(false);
        console.log(reviews);
      });
  }, []);

  console.log(
    reviews[0].attributes.users_permissions_user.data.attributes.firstname
  );
  return (
    <div className={classes.container}>
      <h1>Review List</h1>

      {isLoading ? (
        <ListCardSkeleton />
      ) : (
        <div>
          {reviews.map((review, index) => (
            <div className={classes.card} key={index}>
              <div>{review.attributes.users_permissions_user.data.attributes.firstname}</div>
              <div>
                <StarsView rate={review.attributes.rating}/>
              </div>

              <div className={classes.comment}>
                {review.attributes.comment}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewList;
