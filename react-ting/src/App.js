import React from "react";
import { useSpring, animated } from 'react-spring'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import birdData from "./Components/birdData";
import Footer from "./Components/Footer";
import ShopList from "./Components/ShopList";
import ChainExample from "./Components/Anime";
import LoopTrue from "./Components/LoopTrue";
import LoopObject from "./Components/Footer";
import Button from "./Components/Button";

import { Transition } from "react-spring";




import "./App.css";



function App() {
  
  return (

    <div className="App">
      <Router>
        <Nav />
        <ChainExample />
        <LoopTrue />
        <LoopObject />
        <Transition />
        <Button />
        
        
       

        <Routes>
          
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" exact element={<Home />} />
          <Route Path="/ShopList" element={<ShopList />} />
          


        </Routes>
      </Router>
    </div>
  );
}
// const HomePage = () => {
//   <div>
//     <h1>Home page</h1>
//   </div>
// }

export default App;
