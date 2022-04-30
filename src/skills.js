import React, { useState } from "react";
import "./skills.css";
function Skills() {
  const [active, setActive] = useState(false);
  function toggleClass() {
    console.log("click")
   setActive(!active)
  }
  return (
    <div className="container home-container">
      <div className="logo" onClick={toggleClass}>
        <div className={active ? "active" : "hover-show"} >
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/react.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/node.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/flutter.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/css.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/html.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/mongo.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/bootstrap.png)" }}
          ></span>
          <span
            className="circle"
            style={{ backgroundImage: "url(/images/graph.png)" }}
          ></span>
        </div>
        <img
          /* className='myCodingImage' */ src="/images/louka.jpg"
          alt="malek" 
        />
      </div>
    </div>
  );
}

export default Skills;
