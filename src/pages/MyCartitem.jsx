import React from "react";

const MyCartitem = ({ item }) => {
  return (
    <>
      <div className="max-w-lg mx-auto bg-slate-50 text-gray-900 rounded-lg p-4 text-center flex flex-row mb-4 justify-center">
        <img className="w-40 max-h-40 object-contain" src={item.image} alt="" />
        <div>
          <h3 className="text-xl pl-3">{item.name}</h3>
          <p className="text-sm pl-3">
            <strong>Quantity: </strong>1
          </p>
          <p className="pl-3">
            <strong>Price : {item.price} </strong>
          </p>
          <p className="pl-3">
            <strong>Total : {item.price}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default MyCartitem;
