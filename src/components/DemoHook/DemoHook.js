import React, { useState } from "react";
import Footer from "./Footer";

export default function DemoHook() {
  let [number, setNumber] = useState(1);
  let handleIncrease = () => {
    setNumber(number++);
  };
  let handleDecrease = () => {
    setNumber(number--);
  };
  return (
    <div className="container text-center">
      <button onClick={handleDecrease} className="btn btn-success">
        -
      </button>
      <strong className="display-3 mx-5">{number}</strong>
      <button onClick={handleIncrease} className="btn btn-success">
        +
      </button>
      <Footer number={number} setNumber={setNumber} />
    </div>
  );
}
