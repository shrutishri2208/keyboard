import { ACTIONS } from "./colourTypes";

export const setColour = (payload) => {
  return {
    type: ACTIONS.SET_COLOUR,
    payload: payload,
  };
};
