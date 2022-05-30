import React from "react";

import Button from "./Button";


const img = {
  width: "180px",
  height: "180px",
  borderRadius: "50%",
 
};

export default function Contact(props) {
  return (
    <div className="ore">
      <img src={props.img} className="img" style={img}></img>
      <h2 className="name">{props.name}</h2>
      <p className="num">{props.number}</p>
      <p className="email"> {props.email}</p>
      <button type="submit">Click Me!</button>
     
      
    </div>
  );
}
