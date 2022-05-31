import React from 'react'
const fix = {
    width : "420px",
    height: "30px",
    textAlign: "center",
    fontSize: "20px"
 }
export default function Username(props) {
  return (
    <div>
      <input type = "text" placeholder='Username' style={fix}></input>
    </div>
  )
}
