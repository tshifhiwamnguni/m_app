import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import classes from "./Slider.module.scss";
import images from "./images";

function Slider() {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else if (imgIndex >= images.length - 1) {
      setImgIndex(0);
    }
  };

  const prevImg = () => {
    if (imgIndex <=0) {
      setImgIndex(images.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className={classes.slider}>
      <MdOutlineArrowBackIos className={classes.arrowsL} onClick={prevImg} />
      <img src={images[imgIndex]} alt="wall"></img>
      <MdOutlineArrowForwardIos className={classes.arrowsR} onClick={nextImg} />
    </div>
  );
}

export default Slider;
