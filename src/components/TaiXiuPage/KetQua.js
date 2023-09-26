import React from "react";

export default function KetQua({ luaChon, soBanThang, soLuotChoi }) {
  return (
    <div className="pt-5">
      <h2>Bạn chọn: {luaChon}</h2>
      <h2>Số bàn thắng: {soBanThang}</h2>
      <h2>Số lượt chơi: {soLuotChoi}</h2>
    </div>
  );
}
