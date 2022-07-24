import React, { useState } from "react";

function App() {
const [Time,setTime] = useState(new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
}))
 
 function updateTime(){
   setTime(new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }))
 }
 setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
//       <button onClick = {updateTime}>Get Time</button>
    </div>
  );
}

export default App;
