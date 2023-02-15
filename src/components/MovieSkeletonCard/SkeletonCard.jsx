import React from 'react'
import classes from'./MovieSkeletonCard.module.scss'

function SkeletonCard() {
  return (
<a className={`${classes.movie}`}id="card-link" target="_blank">
  <div className={classes.card__body}>
    <div className={`${classes.card__body} ${classes.body__img}`}>
      <img className={`${classes.skeleton} ${classes.img}`}  alt="" id="cover-img" /> 
    </div>
    <div className={`${classes.card__body} ${classes.header__title}`} id="card-title">
      <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
      <div className={`${classes.skeleton} ${classes.skeleton_text}`}></div>
    </div>   
     <div className={`${classes.skeleton} ${classes.skeleton_text} ${classes.skeleton_footer}`}></div>
  </div>
</a>
  )
}

export default SkeletonCard