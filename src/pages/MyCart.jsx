import React from "react";
import MyCartitem from "./MyCartitem";
import { useSelector } from "react-redux";

const MyCart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div>
      {cartItems.map((item) => (
        <MyCartitem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MyCart;
