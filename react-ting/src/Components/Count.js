// import React from 'react'
import React, { useState } from "react";

const stylo = {
  width: "50px",
  height: "50px",
  backgroundColor: "red",
};
const stylop = {
  width: "50px",
  height: "50px",
  backgroundColor: "green",
};

export default function Count() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <hr />
      <h1>Count: {count}</h1>
      <button style={stylop} onClick={increase}>
        +
      </button>{" "}
      <br />
      <br />
      <button style={stylo} onClick={decrease}>
        -
      </button>
    </div>
  );
}
