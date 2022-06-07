import React, { useState } from 'react'
const fix = {
    width : "420px",
    height: "30px",
    textAlign: "center",
    fontSize: "20px"
 }

export default function Username() {
  const [change , setchange] = useState('');
  const [cliq, setCliq] = useState("");
  function handleChange (e) {
     setchange(e.target.value)
      // console.log(e.target.placeholder)
      // console.log(e.target.type)
  }
  function hanleCliq (e) {
      // const [value] = e.target
      setCliq(change)

    }
 
  return (
   
    <div>
      
      <input onChange={handleChange}type = "text" placeholder='Username' style={fix}></input>
      <button onClick={hanleCliq}>Submit</button>
   <h1>Hello:{cliq}</h1>
    </div>
  )
}
