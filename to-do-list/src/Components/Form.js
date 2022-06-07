// import React from 'react'
import { useState } from "react";

export default function Form() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleClick(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }
  function handleSubmit(e) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
    e.prventDefault()
  }
  return (
    <div>
      <h1 className="ola"> TO-DO LIST</h1>
      <h1>Hello: </h1>

      <input onChange={handleClick} type="text" value={inputText}></input>

      <button onClick={handleSubmit} type="submit">
        Add
      </button>
      <br></br>
      <ul>
        {items.map((input) => (
          <li>{items}</li>
        ))}
      </ul>
    </div>
  );
}
