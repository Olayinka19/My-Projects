import React from 'react'
const fix = {
    width : "420px",
    height: "30px",
    textAlign: "center",
    fontSize: "20px"
 }
export default function Password() {
  return (
    <div>
      <input  style = {fix} type = "password" placeholder='Password'></input>
    </div>
  )
}
