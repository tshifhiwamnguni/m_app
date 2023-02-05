import React from 'react'
import classes from './Nav.module.scss'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={classes.nav}>
      <div>
        theSee
      </div>

      <ul className={classes.nav__bar}>
        <li className={classes.li}>
          <NavLink style={{ textDecoration: 'none', color: 'white'}} to={'/'}>home</NavLink>
        </li>
        <li className={classes.li}>
          <NavLink style={{ textDecoration: 'none', color: 'white'}} to={'profile'}>profile</NavLink>
          
        </li>
        <li className={classes.li}>
          logout
          
        </li>
      </ul>

    </div>
  )
}

export default Nav