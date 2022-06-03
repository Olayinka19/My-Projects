import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import "./App.css";
import { Link } from "react-router-dom";
import ShopList from "./Components/ShopList";
import { useSpring, animated } from 'react-spring'

const styla = {
  color: "white",
 
};



export default function Nav() {
  return (
    
    <div className="Nav">
      <h2>Project Heistia</h2>
      <Link style={styla} to="/About">
        <About />
      </Link>
      <Link style={styla} to="/Contact">
        <Contact />
      </Link>
      <Link style={styla} to="/Shop">
        <Shop />
      </Link>

      <Link style={styla} to="/Home">
        <Home />
      </Link>
      <Link style={styla} to="/ShopList">
        <ShopList />
      </Link>
    </div>
  );
}
