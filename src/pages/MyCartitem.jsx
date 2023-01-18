import React from "react";
import image from "../assets/store/blackhoddi.jpg";

const MyCartitem = () => {
  return (
    <div className="max-w-lg mx-auto bg-slate-50 text-gray-900 rounded-lg p-4 text-center flex flex-row mb-4">
      <img className="w-40 max-h-40 object-contain" src={image} alt="" />
      <div>
        <h3 className="text-xl">BlackHoddi</h3>
        <p className="text-xl">
          <strong>quantity:</strong>1
        </p>
        <p>
          <strong>Price : </strong>$500
        </p>
      </div>
    </div>
  );
};

export default MyCartitem;
