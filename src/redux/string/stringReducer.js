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
    default: {
      return state;
    }
  }
};

export default stringReducer;
