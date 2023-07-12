import { ACTIONS } from "./capitalTypes";

const initialState = {
  isCapital: false,
};

const capitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CAPITAL:
      return {
        isCapital: !state.isCapital,
      };
    default:
      return state;
  }
};

export default capitalReducer;
