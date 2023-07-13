import { ACTIONS } from "./colourTypes";

const initialState = {
  colour: "blue",
};

const colourReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_COLOUR:
      return {
        colour: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default colourReducer;
