import React from 'react'
import classes from './MovieDetailSkeleton.module.scss'
function MovieDetailSkeleton() {
  return (
    <a id="card-link" target="_blank">
  <div className={classes.card__body}>
 <div className={classes.skeleton_text_Tile}>
  <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
</div>
  <div className={`${classes.skeleton} ${classes.skeleton_text_genre}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text_mins}`}></div>
    <div className={`${classes.card__body} ${classes.body__img}`}>
      <img className={`${classes.skeleton} ${classes.img}`}  alt="" id="cover-img" /> 
    </div>
    <div className={`${classes.card__body} ${classes.header__title}`} id="card-title">
      <div className={`${classes.skeleton} ${classes.skeleton_text_category}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text_category}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text_director}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text_category}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text_music}`}></div>
    </div>   
 
  </div>
</a>
  )
}

export default MovieDetailSkeleton