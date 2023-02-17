import React from "react";
import classes from "./ListCardSkeleton.module.scss";
function ListCardSkeleton() {
  return (
    <div className={`${classes.card} ${classes.skeleton}`}>
      <div className={`${classes.skeleton_name} ${classes.skeleton}`}>
        
      </div>
      <div className={` ${classes.skeleton_star} ${classes.skeleton} `}>
        
      </div>

      <div className={`${classes.skeleton_text} ${classes.skeleton}`}>
        
      </div>
    </div>
  );
}

export default ListCardSkeleton;
