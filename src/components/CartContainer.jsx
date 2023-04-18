import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartContainer;
