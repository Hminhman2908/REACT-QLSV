import React from "react";

export default function Footer({ number, setNumber }) {
  // console.log("🚀 ~ file: Footer.js:4 ~ Footer ~ props:", number);
  let handleRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 1000));
  };
  return (
    <div>
      <h1 className="text-warning mt-3">Gấp đôi số lượng</h1>
      <h2 className="text-danger">{number * 2}</h2>
      <button onClick={handleRandomNumber} className="btn btn-primary">
        Random
      </button>
    </div>
  );
}
