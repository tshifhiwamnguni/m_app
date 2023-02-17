import React, { useState,useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import classes from "./StarRating.module.scss";
function StarRating({rate},props) {
  const [rating, setRating] = useState(1);


  function addStar(data){
    rate(data)
  setRating(data)
  }
   
  
  
  return (
    <div>
      {rating === 1 ? (
        <div>
          <AiFillStar className={classes.gold}  onClick={()=>{addStar(1)}} />
          <AiFillStar className={classes.white} onClick={()=>addStar(2)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(3)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(4)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(5)}/>
        </div>
      ) : rating === 2 ? (
        <div>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(1)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(2)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(3)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(4)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(5)}/>
        </div>
      ) : rating === 3 ? (
        <div>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(1)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(2)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(3)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(4)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(5)}/>
        </div>
      ) : rating === 4 ? (
        <div>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(1)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(2)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(3)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(4)}/>
          <AiFillStar className={classes.white} onClick={()=>addStar(5)}/>
        </div>
      ) : (
        <div>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(1)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(2)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(3)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(4)}/>
          <AiFillStar className={classes.gold}  onClick={()=>addStar(5)}/>
        </div>
      )}
    </div>
  );
}

export default StarRating;
