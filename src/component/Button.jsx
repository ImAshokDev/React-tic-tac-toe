import React from "react";

export function Button({ xIsNext, playerName, floatLeft, btnId }) {
  return (
    <button
      type="button"
      id={btnId}
      style={{
        background: xIsNext ? "Green" : "",
        color: xIsNext ? "white" : "black",
        float: floatLeft,
      }}
    >
      {playerName}
    </button>
  );
}
