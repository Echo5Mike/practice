import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const display = [];
  const onClick = () => {
    console.log("hello");
  };
  return (
    <>
      <Header />
      <div className="counters">
        {display.map((value, index) => {
          return <Counter header={onClick} />;
        })}
        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
