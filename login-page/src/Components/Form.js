import React from 'react'
import Login from './Login'
import Password from './Password'
import Username from './Username'


export default function Form(props) {
  return (
    <div>
      <Username  />
      <br/>
      <Password />
      <br/>
      <Login />
    </div>
  )
}
export {Username , Login , Password}
