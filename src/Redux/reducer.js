import { PLAYER1 } from "./types";

const initialState = {
  player1: "",
  player2: "",
};

const reducer = (state = initialState, actions) => {
  if (actions.type === PLAYER1) {
    return {
      player1: actions.payload.player1,
      player2: actions.payload.player2,
    };
  }

  if (actions.type === "CHANGEPLAYERS") {
    return {
      player1: actions.player1,
      player2: actions.player2,
    };
  }

  return state;
};

export default reducer;
