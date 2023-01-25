import React from "react";
import MyCartitem from "./MyCartitem";
import { useSelector } from "react-redux";

const MyCart = () => {
  const { items = [] } = useSelector((store) => store.cart);
  return (
    <div>
      {items.map((item) => (
        <MyCartitem item={item} />
      ))}
    </div>
  );
};

export default MyCart;
