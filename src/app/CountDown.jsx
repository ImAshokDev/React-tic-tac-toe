import React, { useState } from "react";
import { useEffect } from "react";

function CountDown({ start, currentPlayer, xIsNext, count1, count2 }) {
  const [counter1, setCounter1] = useState(count1);
  const [counter2, setCounter2] = useState(count2);

  useEffect(() => {
    if (start) {
      if (currentPlayer === "O") {
        const Timer1 =
          counter1 > 0 &&
          setInterval(() => {
            setCounter2(5);
            setCounter1(counter1 - 1);
          }, 1000);
        return () => clearInterval(Timer1);
      } else if (currentPlayer === "X") {
        const Timer2 =
          counter2 > 0 &&
          setInterval(() => {
            setCounter1(5);
            setCounter2(counter2 - 1);
          }, 1000);

        return () => clearInterval(Timer2);
      }
    }
  }, [counter1, counter2, currentPlayer, start, xIsNext]);

  return (
    <div className="countdown">
      <div className="countdown1">
        <p>{counter1}s</p>
      </div>
      <div className="countdown2">
        <p>{counter2}s</p>
      </div>
    </div>
  );
}

export default CountDown;
