import { ACTIONS } from "./stringTypes";

export const setString = (payload) => {
  return {
    type: ACTIONS.SET_STRING,
    payload: payload,
  };
};
