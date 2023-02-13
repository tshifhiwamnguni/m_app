import React,{useEffect,useState} from "react";
import classes from "./Checkout.module.scss";


import CheckoutDetails from "../../components/checkoutDetails/CheckoutDetails";
import Snacks from "../../components/snacks/Snacks";
import { useNavigate } from "react-router-dom";
function Checkout() {

   
      
    
      const [snack, setSnack] = useState();
      const [price, setPrice] = useState(0);
      const [type, setType] = useState();
      const [seats, setSeats] = useState([]);
      const [placeName, setPlaceName] = useState();
      const [cinemaLocation, setLocation] = useState();
      const [placeId, setPlaceId] = useState();
      const [selectedSnacks, setSelectedSnacks] = useState([]);
      const [movieName, setMovieName] = useState();
      const [movieImage, setMovieImage] = useState();
      const [totalPrice, setTotalPrice] = useState();
      const [MId, setMId] = useState();
      const [date, setDate] = useState();
      const [refresh, setRefresh] = useState(true);
      const navigate = useNavigate();
    
      useEffect(() => {
       
        console.log("seats ", localStorage.getItem("seats"));
        setMId(localStorage.getItem("MId"));
        setDate(localStorage.getItem("date"));
        setLocation(localStorage.getItem("Location"));
        setPlaceId(localStorage.getItem("PlaceId"));
        setPlaceName(localStorage.getItem("PlaceName"));
        setSeats(localStorage.getItem("seats").split(","));
        setPrice(localStorage.getItem("MPrice"));
        setMovieName(localStorage.getItem("MName"));
        setMovieImage(localStorage.getItem("Image"));
        setType(localStorage.getItem("type"));
        setTotalPrice(getTotal());
      }, []);

      function call() {
        setRefresh(!refresh);
        console.log("first");
      }
    
      useEffect(() => {
        setTotalPrice(getTotal());
        console.log("logger", totalPrice);
      }, [refresh]);
    
      useEffect(() => {
        function delay() {
          setTimeout(() => {
            call();
          }, 2000);
        }
        delay();
      }, []);
    
      function selectSnack(props) {
        setSelectedSnacks((selectedSnacks) => [...selectedSnacks, props]);
    
        // setTotalPrice(getTotal() )
        setRefresh(!refresh);
      }
    
      function handleDeleteSnack(data) {
        console.log("index ", data);
        let index = selectedSnacks.findIndex((seat) => seat.id === data.id);
        console.log("delete ", index);
        const newElements = [...selectedSnacks];
        newElements.splice(index, 1);
        setSelectedSnacks(newElements);
        setRefresh(!refresh);
      }
    
      function handleDeleteSeat(data) {
        console.log("data ", data);
        let index = seats.findIndex((seat) => seat === data);
        console.log("delete ", index);
        const newElements = [...seats];
        newElements.splice(index, 1);
        setSeats(newElements);
        setRefresh(!refresh);
      }
    
      function getTotal() {
        let snacks = getSnackTotal();
        let seats = getSeatTotal();
        let total = seats + snacks;
        return total;
      }
    
      function getSeatTotal() {
        let seatPrice = price * seats.length;
    
        return seatPrice;
      }
    
      function getSnackTotal() {
        let totalSnack = 0;
        selectedSnacks.map((element) => {
          totalSnack += element.attributes.price;
        });
        return totalSnack;
      }
  return (
    <div className={classes.container}>
      <Snacks/>
      <CheckoutDetails
      locations={cinemaLocation}
      placeId={placeId}
      placeName={placeName}
      seats={seats}
      type={type}
      date={date}
      movieName={movieName}
      movieImage={movieImage}
      price={price}
      
      
      />
    </div>
  );
}

export default Checkout;
