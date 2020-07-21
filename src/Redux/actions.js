import { PLAYER1, PLAYER2 } from "./types";

export const actionPlayer1 = (payload) => {
  return {
    type: PLAYER1,
    payload,
  };
};
