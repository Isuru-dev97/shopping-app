import React from "react";

function BlackLayout(props) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600  min-h-screen">
      {props.children}
    </div>
  );
}

export default BlackLayout;
