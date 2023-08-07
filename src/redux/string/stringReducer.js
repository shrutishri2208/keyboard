import { ACTIONS } from "./stringTypes";

const initialState = {
  fullString: "",
};

const stringReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_STRING:
      return {
        fullString: state.fullString + action.payload,
      };
    case ACTIONS.DELETE_STRING:
      return {
        fullString: state.fullString.slice(0, -1),
      };
    case ACTIONS.SET_SPACE: {
      return {
        fullString: state.fullString + " ",
      };
    }
    case ACTIONS.SET_TAB: {
      return {
        fullString: state.fullString + "    ",
      };
    }
    case ACTIONS.SET_NEWLINE: {
      return {
        fullString: state.fullString + "\n",
      };
    }
    case ACTIONS.CLEAR_ALL: {
      return {
        fullString: "",
      };
    }
    default: {
      return state;
    }
  }
};

export default stringReducer;
