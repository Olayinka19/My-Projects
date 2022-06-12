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
     e.preventDefault()
     e.reser()
  }
  function hanleCliq (e) {
     

    }
 
  return (
   
    <div>
       <h1>Hello:{change}</h1>
       <h1>Hello:{change}</h1>

      <input onChange={handleChange}type = "text" placeholder='Username' style={fix}></input> <br></br>
      <br></br>
      <input onChange={handleChange} style={fix} type="password" placeholder="Password" />

  
    </div>
  )
}
