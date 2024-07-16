import React from "react";
import "../App.css";

const Header = () => {
  const onClick = () => {
    console.log("hello");
  };
  return (
    <>
      <h1>Counting Squares</h1>
      <div>
        <button onClick={onClick} className="button">
          Box button
        </button>
        <button className="button">Box undo</button>
      </div>
    </>
  );
};

export default Header;
