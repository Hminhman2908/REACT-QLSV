import React, { useState } from "react";
import "./style.scss";
import XucXac from "./XucXac";
import KetQua from "./KetQua";
import bgGame from "./images/bgGame.png";
// import xx1 from "./images/1.png";
// import xx2 from "./images/2.png";
// import xx3 from "./images/3.png";
// import xx4 from "./images/4.png";
// import xx5 from "./images/5.png";
// import xx6 from "./images/6.png";
// import { TAI } from "./utils";

let defaultXucXac = [
  // {
  //   img: xx1,
  //   giaTri: 1,
  // },
  // {
  //   img: xx1,
  //   giaTri: 1,
  // },
  // {
  //   img: xx1,
  //   giaTri: 1,
  // },
  {
    img: "./images/1.png",
    giaTri: 1,
  },
  {
    img: "./images/1.png",
    giaTri: 1,
  },
  {
    img: "./images/1.png",
    giaTri: 1,
  },
];

export default function TaiXiuPage() {
  const [xucXacArr, setXucXacArr] = useState(defaultXucXac);
  const [luaChon, setLuaChon] = useState("");
  const [soBanThang, setSoBanThang] = useState(0);
  const [soLuotChoi, setSoLuotChoi] = useState(0);
  let handlePlayGame = () => {
    console.log("Bắt đầu");
    let newXucXacArr = xucXacArr.map((item) => {
      // Math.floor(Math.random() * (max - min + 1) + min)
      let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      return {
        img: `./images/${random}.png`,
        giaTri: random,
      };
    });
    setXucXacArr(newXucXacArr);
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgGame})` }}
      id="game-page"
      className="container py-5 text-center mt-5"
    >
      <XucXac
        xucXacArr={xucXacArr}
        setXucXacArr={setXucXacArr}
        setLuaChon={setLuaChon}
        handlePlayGame={handlePlayGame}
      />
      <KetQua
        luaChon={luaChon}
        soBanThang={soBanThang}
        soLuotChoi={soLuotChoi}
      />
    </div>
  );
}
