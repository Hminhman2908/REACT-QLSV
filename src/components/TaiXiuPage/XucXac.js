import React from "react";
import { TAI, XIU } from "./utils";

export default function XucXac({
  xucXacArr,
  setXucXacArr,
  setLuaChon,
  handlePlayGame,
}) {
  let renderXucXac = () => {
    return xucXacArr.map((item, index) => (
      <img src={item.img} key={index} width={80} className="mx-1" alt="" />
    ));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => setLuaChon(TAI)}
          className="btn btn-dark p-5 m-5"
          style={{ fontSize: 24 }}
        >
          TÀI
        </button>
        <div>{renderXucXac()}</div>
        <button
          onClick={() => setLuaChon(XIU)}
          className="btn btn-danger p-5 m-5"
          style={{ fontSize: 24 }}
        >
          XỈU
        </button>
      </div>
      <button
        onClick={() => {
          handlePlayGame();
        }}
        className="btn btn-warning px-5 py-2"
      >
        Play Game
      </button>
    </div>
  );
}
