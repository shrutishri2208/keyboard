import { ACTIONS } from "./letterTypes";

export const setLetter = (payload) => {
  return {
    type: ACTIONS.SET_LETTER,
    payload: payload,
  };
};
