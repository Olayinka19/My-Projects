// import React from 'react'
import React, {useState} from 'react'

const fix = {
    width : "420px",
    height: "30px",
    textAlign: "center",
    fontSize: "20px"
 }
 const handleClick = (e) => {
    const {value} = e.target.value
  
    
}
export default function Login(props) {
    const [click , setClick] = useState("")
  return (
    <div>
        <input  style={fix} type = "Submit" value= "Login"></input>
    </div>
  )
}
