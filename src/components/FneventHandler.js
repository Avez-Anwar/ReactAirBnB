import React from "react";

function FneventHandler() {
  const clickHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}

export default FneventHandler;
