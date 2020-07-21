import React from "react";
import "./App.css";
import HomePage from "./component";
import ReduxForm from "./Redux/InputForm";

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <HomePage />
      <ReduxForm />
    </div>
  );
}

export default App;
