import { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import classes from './Slider.module.scss'

import axios from "axios"

function Slider() {
  const [moviess, setMovies] = useState([])
 



  useEffect(() => {

    axios
      .get('https://strapi-movie-app.onrender.com/api/movies?populate=*',{
        headers: {
          Authorization:
            "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
            
  }})
      .then((response) => {
        // Handle success.
        // console.log(response.data.data[1].attributes.cinema.data.attributes.name);
    

      
        setMovies(response.data.data);   
         console.log(moviess)
      })
      .catch((error) => {
        // Handle error.
      });
  }, []);




  return (
    <div className={classes.slider}>

      <MdOutlineArrowBackIos className={classes.arrowsL} />
      <img  alt='wall'></img>
      < MdOutlineArrowForwardIos className={classes.arrowsR} />

    </div>
  )
}

export default Slider