// import React from 'react'
import { useState } from 'react'





export default function Button(e) {
 

    const [click , setClick] = useState("");
    const [inputValue , setInputValue] = useState("")
   
    function handleClick () {
      setClick("Olayinka")
    }
    function handleInput () {
      setInputValue("Onboard")
    }
  return (
      
    <div>
      <hr></hr>
     <button type='submit' onClick={handleClick}>Click Me!</button> <br/>
    
     
     <h1>Yo: {click}</h1>
     <h2>Welcome: {inputValue}</h2>
     <button onClick={handleInput}>Button</button><br></br>
    <input type="text" onChange={click}></input> <br></br>
    
  
     
    </div>
  )
}
