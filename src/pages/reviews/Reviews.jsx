import React from 'react'
import ReviewForm from '../../components/reviewForm/ReviewForm'
import ReviewList from '../../components/ReviewsList/ReviewList'
import classes from './Reviews.module.scss'

function Reviews() {
  return (
    <div>
        
        <div className={classes.forms}>
            <ReviewForm/>
        </div>

        <div className={classes.list}>
            <ReviewList/>
        </div>
    </div>
  )
}

export default Reviews