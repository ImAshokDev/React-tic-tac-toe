import React, { useState, useEffect } from "react";

function Countdown({ timeChange }) {
  const [counter1, setCounter1] = useState(5);
  const [counter2, setCounter2] = useState(5);

  // First Attempts
  // setInterval(() => setCounter(counter - 1), 1000);

  // Second Attempts
  // React.useEffect(() => {
  //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  // }, []);

  // Second Attempts - Inspection
  // React.useEffect(() => {
  //   counter > 0 &&
  //     setInterval(() => {
  //       console.log(counter);
  //       setCounter(counter - 1);
  //     }, 1000);
  // }, []);

  // Third Attempts
  // React.useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  // Suggested by Laurent
  const renderTimer1 = () => {
    counter1 > 0 && setTimeout(() => setCounter1(counter1 - 1), 1000);
  };

  const renderTimer2 = () => {
    counter2 > 0 && setTimeout(() => setCounter2(counter2 - 1), 1000);
  };

  return (
    <div className="App">
      {/* <div>Countdown: {counter} </div> */}
      {timeChange ? renderTimer1() : renderTimer2()}

      <p>time1:{counter1}</p>
      <p>time2:{counter2}</p>
    </div>
  );
}

export default Countdown;
