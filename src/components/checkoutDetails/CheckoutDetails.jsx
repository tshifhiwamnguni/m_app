import { useState, useEffect } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import CheckoutSkeleton from "../checkoutSkeleton/CheckoutSkeleton";
import classes from "./CheckoutDetails.module.scss";

function CheckoutDetails(props) {
  const [snack, setSnack] = useState();
  const [price, setPrice] = useState(0);
  const [type, setType] = useState();
  const [seats, setSeats] = useState([]);
  const [placeName, setPlaceName] = useState();
  const [location, setLocation] = useState();
  const [placeId, setPlaceId] = useState();
  const [mName, setmName] = useState();
  const [mImage, setMImage] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [MId, setMId] = useState();
  const [date, setDate] = useState();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log("seats ", localStorage.getItem("seats"));
    setMId(localStorage.getItem("MId"));
    setDate(localStorage.getItem("date"));
    setLocation(localStorage.getItem("Location"));
    setPlaceId(localStorage.getItem("PlaceId"));
    setPlaceName(localStorage.getItem("PlaceName"));
    setSeats(localStorage.getItem("seats").split(","));
    setPrice(localStorage.getItem("MPrice"));
    setmName(localStorage.getItem("MName"));
    setMImage(localStorage.getItem("Image"));
    setType(localStorage.getItem("type"));

  }, []);

  function handleDeleteSeat(data) {
    let index = seats.findIndex((seat) => seat === data);
    const newElements = [...seats];
    newElements.splice(index, 1);
    setSeats(newElements);
  }
  function handleDeleteSnack(data) {
    let index = props.selectedSnacks.findIndex((seat) => seat.id === data.id);
    const newElements = [...props.selectedSnacks];
    newElements.splice(index, 1);
    props.setSelectedSnacks(newElements);
    setRefresh(!refresh);
  }
  function getSnackTotal() {
    let totalSnack = 0;
    props.selectedSnacks.map((element) => {
      totalSnack += element.attributes.price;
    });
    return totalSnack;
  }

  return (
    <div className={classes.details}>
      <div className={classes.top}>
        <span>your booking</span>{" "}
        <button className={classes.buttons}> Cancel</button>{" "}
      </div>

      <div>
        {/* book details */}
        {mName == null ? (
          <CheckoutSkeleton />
        ) : (
          <div>
            <h1>{mName}</h1>
            <div className={classes.movie}>
              <div>
                <img src={mImage} alt="shoe" />
              </div>
              <div className={classes.movie_details}>
                <span>{location}</span>
                <span>date {localStorage.getItem('day')} {localStorage.getItem('month')}</span>
                <span>time {localStorage.getItem('selectedTimes')}</span>
              </div>
            </div>
          </div>
        )}
        {/* seats  */}
        <div>
          your seats
          {seats.map((value, i) => {
            return (
              <div key={i} className={classes.seats}>
                <span>
                  {" "}
                  <AiOutlineMinusCircle
                    onClick={() => {
                      handleDeleteSeat(value);
                    }}
                    className={classes.icon}
                  />{" "}
                  {value}
                </span>
                <span>R{price}</span>
              </div>
            );
          })}
        </div>
        {/* snacks */}
        <div>
          your snacks
          {props.selectedSnacks.map((snack, i) => {
            return (
              <div key={i} className={classes.seats}>
                <span>
                  {" "}
                  <AiOutlineMinusCircle
                    onClick={() => {
                      handleDeleteSnack(snack);
                    }}
                  />
                  {snack.attributes.name}
                </span>
                <span>R{snack.attributes.price}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.price}>
        <span></span>
        <span>total R{(price * seats.length + getSnackTotal()).toFixed(2)}</span>
      </div>
      <div className={classes.price}>
        <span></span>
        <button className={classes.buttons}>Pay</button>
      </div>
    </div>
  );
}

export default CheckoutDetails;
