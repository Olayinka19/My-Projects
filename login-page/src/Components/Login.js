// import React from 'react'
import React, { useState } from "react";
import Username from "./Username";

const fix = {
  width: "420px",
  height: "30px",
  textAlign: "center",
  fontSize: "20px",
 
};

export default function Login(props) {
  const [click, setClick] = useState("Hello");
  const [isMouse, setIsMouse] = useState(false);
  const [mouseOut, setMouseout] = useState(false);
  const handleClick = () => {
    setClick("Welcome");
  };
  function mover(e) {
    setIsMouse(true);
    
  }
  function mout() {
    setMouseout(false)
  }
  return (
    <div>
      <button className="button"
        onMouseOver={mover}
        onMouseOut={mout}
        onClick={handleClick}
        style={{color : "red" , width: "430px"  , height: "50px" , fontSize: "20px", backgroundColor: isMouse ? "gold" : "black"}}
        type="Submit"
      >
        Click Me
      </button>
      <h1>{click}</h1>
    </div>
  );
}
