import React from "react";
import classes from './CheckoutSkeleton.module.scss'
function CheckoutSkeleton() {
  return (
    <a  id="card-link" target="_blank">
        <div className={classes.title}>
           <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div> 
        </div>
         
      <div className={classes.card__body}>
        <div className={`${classes.card__body} ${classes.body__img}`}>
          <img
            className={`${classes.skeleton} ${classes.img}`}
            alt=""
            id="cover-img"
          />
        </div>
        <div className={`${classes.card__body} ${classes.header__title}`}id="card-title">
          <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
          <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
        </div>
        
      </div>
    </a>
  );
}

export default CheckoutSkeleton;
