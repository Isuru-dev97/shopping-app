import React, { useState } from "react";
import { addToCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ id, image, name, price }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count <= 1) {
      return null;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="box inline-block  bg-gray-900 text-slate-50 mt-6 rounded-b-3xl">
      <img src={image} alt="" />
      <h3 className="text-2xl pt-2 text-center">{name}</h3>
      <h4 className="text-xl pt-2 text-center pb-2">{price}</h4>

      <div className="text-center flex gap-2 justify-center">
        <button
          onClick={decrement}
          className="  bg-gray-50 text-black rounded-lg mb-2  px-2 py-0"
        >
          -
        </button>
        <p className="text-xs">{count}</p>
        <button
          onClick={increment}
          className="  bg-gray-50 text-black rounded-lg mb-2 px-2 py-0"
        >
          +
        </button>
      </div>
      <button
        className=" text-center px-5 pb-2 pt-2 mb-4 ml-24 rounded-lg ... bg-gray-50 text-black"
        onClick={() => {
          dispatch(addToCart(id));
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default CartItem;
