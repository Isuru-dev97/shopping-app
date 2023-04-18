import React from "react";
import MyCartitem from "./MyCartitem";
import { useSelector } from "react-redux";

const MyCart = () => {
  const { ItemsSlice } = useSelector((store) => store.cart);
  return (
    <div>
      <MyCartitem />
      <MyCartitem />
      <div className="max-w-lg mx-auto bg-slate-50 text-gray-900 rounded-lg p-4 text-center flex flex-row mb-4 justify-between items-center">
        <p className="text-xl">Total</p>
        <p>
          <strong>$500</strong>
        </p>
      </div>
    </div>
  );
};

export default MyCart;
