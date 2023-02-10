import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Booking.module.scss";

function Booking() {
  const naviage = useNavigate();
  const [bookedSeat, setBookedSeat] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [bookingDate, setBookingDate] = useState("");

  function selectSeat(props) {
    if (bookedSeat.includes(props)) {
      console.log("booked");
      console.log(props);
      handleDelete(bookedSeat.findIndex((seat) => seat === props));
    } else {
      setBookedSeat((bookedSeat) => [...bookedSeat, props]);
      console.log("state: ", bookedSeat);
      setIsActive(true);
    }
  }

  function book() {
    console.log(bookedSeat);
    localStorage.setItem("seats", bookedSeat);
    localStorage.setItem("date", bookingDate);
    console.log("booked ", localStorage.getItem("seats"));
    naviage("../snackss");
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

  const handleDelete = (index) => {
    console.log("delete ", index);
    const newElements = [...bookedSeat];
    newElements.splice(index, 1);
    setBookedSeat(newElements);
  };

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
          <div className={classes.time}>
            20:00
          </div>
          </div>
        </div>
        <div className="mt-24">
          <h1>booking</h1>
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
                      key={element}
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

          <div className="flex mt-10">
            <button className={`${classes.radius}`} onClick={book}>
              {" "}
              book{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
