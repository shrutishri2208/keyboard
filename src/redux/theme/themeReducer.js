import { ACTIONS } from "./themeTypes";

const initialState = {
  theme: "writer",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return {
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default themeReducer;
