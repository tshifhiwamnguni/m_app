import React from 'react'
import { AiFillStar } from "react-icons/ai";
import classes from './StarsView.module.scss'

function StarsView(props) {
  return (
    <div>

        
{props.rate === 1 ? (
        <div>
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
        </div>
      ) : props.rate === 2 ? (
        <div>
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
        </div>
      ) : props.rate === 3 ? (
        <div>
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.white} />
          <AiFillStar className={classes.white} />
        </div>
      ) : props.rate === 4 ? (
        <div>
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.white} />
        </div>
      ) : (
        <div>
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
          <AiFillStar className={classes.gold}  />
        </div>
      )}

    </div>
  )
}

export default StarsView