import { ACTIONS } from "./themeTypes";

export const setTheme = (payload) => {
  return {
    type: ACTIONS.SET_THEME,
    payload: payload,
  };
};
