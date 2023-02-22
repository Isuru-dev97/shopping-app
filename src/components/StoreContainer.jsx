import React, { useState } from "react";
import StoreItem from "./StoreItem";
import { useSelector } from "react-redux";

function StoreContainer() {
  const { items } = useSelector((store) => store.cart);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center w-full gap-4 mt-2">
      {items.map((item) => {
        return <StoreItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default StoreContainer;
