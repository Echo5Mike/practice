import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  const clr = ["green", "red", "yellow", "blue", "grey", "purple", "cyan", "olivedrab", "goldenrod", "orange"];

  const handleClick = () => {
    setCount(count + 1);
    setColor(clr[Math.floor(Math.random() * clr.length)]);
  };

  return (
    <div>
      <div onClick={handleClick} className="counter-box" style={{ backgroundColor: color }}>
        <div style={{ textAlign: "center" }}>Count {count}</div>
        <p style={{ color: "black", textAlign: "center" }}>{color}</p>
      </div>
    </div>
  );
};

export default Counter;
