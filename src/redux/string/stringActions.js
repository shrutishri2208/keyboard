import { ACTIONS } from "./stringTypes";

export const setString = (payload) => {
  return {
    type: ACTIONS.SET_STRING,
    payload: payload,
  };
};

export const deleteString = () => {
  return {
    type: ACTIONS.DELETE_STRING,
  };
};

export const setSpace = () => {
  return {
    type: ACTIONS.SET_SPACE,
  };
};

export const setTab = () => {
  return {
    type: ACTIONS.SET_TAB,
  };
};

export const setNewLine = () => {
  return {
    type: ACTIONS.SET_NEWLINE,
  };
};
