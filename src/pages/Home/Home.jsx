import React from 'react'
import PrimaryButton from '../../components/Buttons/PrimaryButton/PrimaryButton'
import ComingSoon from '../../components/ComingSoon/ComingSoon'
import Slider from '../../components/Slider/Slider'
import classes from './Home.module.scss'
function Home() {
  return (
    <div className=''>
      <Slider/>
      <ComingSoon/>
      <div className={classes.buttons}>
       <div/> <PrimaryButton/> <div>OR </div>   <PrimaryButton/> <div/>
      </div>
    </div>
  )
}

export default Home