import React, { useState } from "react";
import CartItem from "./CartItem";

function CartContainer() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "images/redhoddi.jpg",
      name: "Redhoddi",
      price: "$500",
    },
    {
      id: 2,
      image: "images/blackhoddi.jpg",
      name: "Blackhoddi",
      price: "$500",
    },
    {
      id: 3,
      image: "images/bluehoddi.jpg",
      name: "Bluehoddi",
      price: "$500",
    },
    {
      id: 4,
      image: "images/greenhoddi.jpg",
      name: "Greenhoddi",
      price: "$500",
    },
    {
      id: 5,
      image: "images/black.jpg",
      name: "Black Chair",
      price: "$500",
    },
    {
      id: 6,
      image: "images/white.jpg",
      name: "White Chair",
      price: "$500",
    },
    {
      id: 7,
      image: "images/pink.jpg",
      name: "Pink Chair",
      price: "$500",
    },
    {
      id: 8,
      image: "images/gray.jpg",
      name: "Gray Chair",
      price: "$500",
    },
  ]);
  console.log(items);
  return (
    <div className="grid grid-cols-4 justify-center items-center w-full gap-4 mt-2">
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default CartContainer;
