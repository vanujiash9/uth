import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { isBinaryExpression } from "typescript";
import Demo2103 from "./components";

function App() {
  const [ketqua1, setKetqua1] = useState<number>(0);
  const [ketqua2, setKetqua2] = useState<string>('');
  const [inputValue, setInputvalue] = useState<number>(0);
  const getBinary = (n: number): string => {
    let result:string ='';
    // Code để chuyển số `n` sang dạng nhị phân ở đây
    return result;
  }

  function handleClick() {
    let ketqua: number = 1; // Khởi tạo giá trị cho ketqua
    for(let i = 1; i <= inputValue; i++){
      ketqua *= i; // Sử dụng i thay vì ketqua
    }
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

export default Demo2103;
