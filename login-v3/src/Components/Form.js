// import React from 'react'
import React, {useState} from "react"
const styleo = {
width: "220px",
height: "30px",
textAlign: "center",
fontSize: "20px"
}

export default function Form(e) {
   
    const [fullName , setFullName] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    function handleClick (e) {
        
        const {name , value} = e.target

        setFullName((prevValue )=> {
            return {
                ...prevValue,
                [name] : value

            }
        })
        
       
    }
   


  return (
    <div>
        <form>
      <h1>Hello:{fullName.fName} {fullName.lName} {fullName.email} </h1>
      <input onChange={handleClick} name = "fName" style={styleo}  type="text" placeholder='First name' value={fullName.fName}></input><br></br>
      <br></br>
      <input onChange={handleClick} name="lName" style={styleo} type="text" placeholder='Last name' value={fullName.lName} ></input><br></br>
      <br></br>
      <input name="email" onChange={handleClick} style={styleo} type="email" placeholder="Email" value={fullName.email}></input><br></br>
      <br></br>
      <button onClick={handleClick} style={styleo} type="submit" >Submit</button>
      </form>
    </div>
  )
}
