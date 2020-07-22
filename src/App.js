import React from "react";
import "./App.css";
import Game from "./component";
import Countdown from "./component/CountDown";

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      <Game />
      <Countdown />
    </div>
  );
}

export default App;
