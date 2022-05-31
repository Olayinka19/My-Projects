import React from 'react'
import Emojis from './Emojis'


// const img = {
//     width: "50px",
//     height: "50px"
// }
export default function Content(props) {
  return (
    <div className='cont'>
      <h1>
        <p className='name'>{props.name}</p>
        <br></br>
        <img src={props.img} alt = "image" ></img>
        <p>{props.meaning}</p>
      </h1>
    </div>
  )
}
