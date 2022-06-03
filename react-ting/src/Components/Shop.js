import React, { useState, useEffect } from "react";
import birdData from "./birdData";
import { Link } from "react-router-dom";

export default function Shop() {
//   useEffect(() => {
//     fetchData();
//   }, []);
// //   Create a state
//   const [items , setItems] = useState([]);

//   const fetchData = async () => {
//     const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
//     // I'm saving the promise or response in called data 

//     const items = await data.json();
//     // Converts the response I got from fetch to json(),
//     console.log(items)
//     setItems(items)
//   };

  
  return (
    <div>
      {/* {items.map(item => {<h2>{items}</h2> })} */}
      <h1 key={birdData.id}></h1>
      <Link to={`/shop/${birdData.birdDataid}`}>{birdData.name}
</Link>
      <p className="shop">Mint</p>
      
      
      
    </div>
  );
}
