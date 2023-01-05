import React from "react";

function Container(props) {
  return (
    <div className="container max-w-screen-xl mx-auto">{props.children}</div>
  );
}

export default Container;
