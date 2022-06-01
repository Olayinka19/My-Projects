import React from "react";
const fix = {
  width: "420px",
  height: "30px",
  textAlign: "center",
  fontSize: "20px",
};
export default function Password(props) {
  return (
    <div>
      <input style={fix} type="password" placeholder="Password" />
     
    </div>
  );
}




