import React, { useState } from "react";
import logo from "./logo.svg";
import "../App";
import "../components";
import { isBinaryExpression } from "typescript";
import Demo2103 from "../components";

function App() {
  const [ketqua1, setKetqua1] = useState(0);
  const [ketqua2, setKetqua2] = useState('');
  const [inputValue, setInputvalue] = useState(0);

  const getBinary = (n: number) => {
    return n.toString(2);
  }

  function handleClick() {
    const ketqua = Math.pow(inputValue, inputValue);
    setKetqua1(ketqua);
    setKetqua2(getBinary(inputValue));
  }

  return (
    <div>
      <h1>Bài tập React ngày 14-3</h1>
      Nhập vào số tự nhiên:{" "}
      <input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputvalue(Number(e.currentTarget.value));
        }}
      />{" "}
      <br />
      <button onClick={handleClick}>Xử lí</button>
      Kết quả <br />
      <p>a/ {ketqua1}</p>
      <p>b/{ketqua2}</p>
    </div>
  );
}

export default App;
