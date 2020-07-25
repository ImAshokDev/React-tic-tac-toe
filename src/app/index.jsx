import React, { Component } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import Form from "./InputForm";
import { CHANGEPLAYERS } from "../Redux/types";
import { Button } from "../component/Button";
import { calculateWinner } from "./Winner";
import CountDown from "./CountDown";

class Game extends Component {
  state = {
    xIsNext: true,
    squares: Array(9).fill(null),
    count: 0,
    reset: true,
    start: false,
    currentPlayer: "",
    counter1: 5,
    counter2: 5,
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      count: this.state.count + 1,
      currentPlayer: squares[i],
    });
  }

  handleReset() {
    this.setState({
      squares: Array(9).fill(null),
      count: 0,
      xIsNext: true,
    });
  }

  changePlayers() {
    this.props.dispatch({
      type: CHANGEPLAYERS,
      player1: "",
      player2: "",
    });

    this.setState({
      squares: Array(9).fill(null),
      count: 0,
      xIsNext: true,
    });
  }

  render() {
    const { pName1, pName2 } = this.props;
    const {
      xIsNext,
      reset,
      start,
      count,
      squares,
      counter1,
      counter2,
    } = this.state;

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      if (winner === "X") {
        status = `${pName1} Wins!`;
      } else {
        status = `${pName2} Wins!`;
      }
    } else {
      if (this.state.count === 9) {
        status = "Match draw";
      } else if (this.state.count < 1) {
        status = "";
      } else {
        status = "";
      }
    }

    return (
      <div className="container">
        {pName1 && pName2 ? (
          <div className="button-block">
            <button
              type="button"
              id="changeBtn"
              onClick={() => this.changePlayers()}
            >
              Change Players
            </button>

            <div className="start-block">
              {reset && count !== 0 ? (
                <button type="button" onClick={() => this.handleReset()}>
                  RESET
                </button>
              ) : (
                <button
                  type="button"
                  id="startBtn"
                  onClick={() =>
                    this.setState({
                      reset: true,
                      start: true,
                    })
                  }
                >
                  START
                </button>
              )}
            </div>
            <div className="name-block">
              <Button playerName={pName1} xIsNext={xIsNext} />
              <Button
                playerName={pName2}
                xIsNext={!xIsNext}
                floatLeft="right"
                btnId="playerBtn2"
              />
            </div>
          </div>
        ) : (
          <Form />
        )}

        <div className="game-board">
          {start && (
            <>
              <CountDown
                count1={counter1}
                count2={counter2}
                xIsNext={xIsNext}
                start={start}
                currentPlayer={this.state.currentPlayer}
              />
              <Board squares={squares} boxClick={(i) => this.handleClick(i)} />
            </>
          )}
        </div>

        {status && (
          <button type="button" id="winnerBtn">
            {status}
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pName1: state.player1,
    pName2: state.player2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
