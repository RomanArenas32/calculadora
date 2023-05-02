import { useState } from "react";

export const CalculatorBox = () => {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  console.log(expression);
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };

  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join(",")
    );
    setAnswer(0);
  };


  const calculate = ()=>{
    setAnswer(eval(expression))
  }

  return (
    <div className="grid">
      <div className="dis">
        <input type="text" value={expression} placeholder="0" disabled />
        <div className="total">{answer}</div>
      </div>
      <div onClick={allClear} className="padButton tomato AC">
        AC
      </div>
      <div onClick={clear} className="padButton tomato C">
        C
      </div>
      <div onClick={() => display("/")} className="padButton div">
        /
      </div>
      <div onClick={() => display("*")} className="padButton times">
        X
      </div>
      <div onClick={() => display("7")} className="padButton dark-gray seven">
        7
      </div>
      <div onClick={() => display("8")} className="padButton dark-gray eight">
        8
      </div>
      <div onClick={() => display("9")} className="padButton dark-gray nine">
        9
      </div>
      <div onClick={() => display("-")} className="padButton minus">
        -
      </div>
      <div onClick={() => display("4")} className="padButton dark-gray four">
        4
      </div>
      <div onClick={() => display("5")} className="padButton dark-gray five">
        5
      </div>
      <div onClick={() => display("6")} className="padButton dark-gray six">
        6
      </div>
      <div onClick={() => display("+")} className="padButton plus">
        +
      </div>
      <div onClick={() => display("1")} className="padButton dark-gray one">
        1
      </div>
      <div onClick={() => display("2")} className="padButton dark-gray two">
        2
      </div>
      <div onClick={() => display("3")} className="padButton dark-gray three">
        3
      </div>
      <div onClick={calculate} className="padButton equal">
        =
      </div>
      <div onClick={() => display("0")} className="padButton dark-gray zero">
        0
      </div>
      <div onClick={() => display(".")} className="padButton dark-gray dot">
        .
      </div>
    </div>
  );
};
