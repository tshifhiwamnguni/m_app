import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.scss";
import CheckoutDetails from "../../components/checkoutDetails/CheckoutDetails";
import Snacks from "../../components/snacks/Snacks";

function Checkout() {
  const [selectedSnacks, setSelectedSnacks] = useState([]);

  useEffect(() => {}, []);

  function snacksSelector(data) {
    setSelectedSnacks((selectedSnacks) => [...selectedSnacks, data]);
  }

  return (
    <div className={classes.container}>
      <Snacks snacksSelector={snacksSelector} />
      <CheckoutDetails
        selectedSnacks={selectedSnacks}
        setSelectedSnacks={setSelectedSnacks}
      />
    </div>
  );
}

export default Checkout;
