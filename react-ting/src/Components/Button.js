import React from 'react'
import { useState } from 'react'





export default function Button(e) {
    const [click , setClick] = useState("");
    const HandleClick = ()=> {
      setClick("Welcome Ola")
      e.reset()
    }
  return (
      
    <div>
     <button type='submit' onClick={HandleClick}>Click Me!</button>
     <h1>{ click}</h1>
    </div>
  )
}
