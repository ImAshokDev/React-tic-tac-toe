import React, { useState } from "react";
import Game from "./Game";

export const Form = ({ addPlayers }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          name="player1"
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Player1 Name"
        />

        <input
          name="player2"
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          placeholder="Player2 Name"
        />
        <button type="submit">Submit</button>
      </form>

      <Game player1={player1} player2={player2} />
    </div>
  );
};
