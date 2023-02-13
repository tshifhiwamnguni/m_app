import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Booking.module.scss";

function Booking() {
  const navigate = useNavigate();
  const [bookedSeat, setBookedSeat] = useState([]);
  const [times, setTimes] = useState(["20:00", "30:00", "40:00", "50:00"]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [bookingDate, setBookingDate] = useState("");

  function selectSeat(props) {
    if (bookedSeat.includes(props)) {
      console.log("booked");
      console.log(props);
      handleDelete(bookedSeat.findIndex((seat) => seat === props));
    } else {
      setBookedSeat((bookedSeat) => [...bookedSeat, props]);
      console.log("state: ", bookedSeat);
    }
  }

  function book() {
    console.log(bookedSeat);
    localStorage.setItem("seats", bookedSeat);
    localStorage.setItem("date", bookingDate);
    console.log("booked ", localStorage.getItem("seats"));
    navigate("/checkout");
  }

  const seats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
  ];

  let us = seats;

  function handleDelete(index) {
    console.log("delete ", index);
    const newElements = [...bookedSeat];
    newElements.splice(index, 1);
    setBookedSeat(newElements);
  }

  // function handleDeleteTime(index) {
  //   console.log("delete ", index);
  //   const newElements = [...selectedTime];
  //   newElements.splice(index, 1);
  //   setSelectedTime(newElements);
  // }

  function _selectedTimes(props) {
    // if (selectedTime.includes(props)) {
    //   console.log("booked");
    //  selectedTime(props)
    //   // handleDeleteTime(selectedTime.findIndex((seat) => seat === props));
    // } else {
    setSelectedTime(props);

    // console.log("state: ", bookedSeat);

    // }
    console.log(selectedTime);
  }

  return (
    <div className={classes.box}>
      <div className={classes.content}>
        <div>
          <h1>select date and time</h1>
          <div className={classes.dateBlock}>
            14 <br />
            tuesday
          </div>
          <div className={classes.timeBlock}>
            {times.map((time, i) => {
              return (
                <div
                  key={i}
                  className={
                    selectedTime.includes(time)
                      ? ` ${classes.selectedTime} `
                      : ` ${classes.time}`
                  }
                  onClick={() => {
                    _selectedTimes(time);
                  }}
                >
                  {time}
                </div>
              );
            })}
            <br />
          </div>
        </div>
        {selectedTime === "" ? null : (
          <div className={classes.seats}>
            <div className={classes.screen}>
              <h2>screen</h2>
            </div>

            <div className={classes.main_container}>
              <div className={classes.container}>
                <div className={classes.seats_container}>
                  {us.map((element, index) => {
                    return (
                      <div
                        className={
                          bookedSeat.includes(element)
                            ? `${classes.greyed}`
                            : `${classes.block}`
                        }
                        key={index}
                        onClick={() => {
                          selectSeat(element);
                        }}
                      >
                        <span>{element}</span>
                      </div>
                    );
                  })}
                </div>
                <br />
              </div>
            </div>

            <div className={classes.buttons_container}>
              <div className={classes.details}>
                <div className={''}>
                  <div className={classes.greyed}/>
                  <label htmlFor="">selected</label>
                </div>
                <div className={''}>
                  <div className={classes.free}/>
                  <label htmlFor="">free</label>
                </div>
                <div className={''}>
                  <div className={classes.taken}/>
                  <label htmlFor="">free</label>
                </div>
              </div>
              
              <div>
                <button className={`${classes.buttons}`} onClick={book}>
                {" "}
                book{" "}
              </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
