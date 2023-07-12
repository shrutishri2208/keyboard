import { ACTIONS } from "./letterTypes";

const initialState = {
  selLetter: "",
};

const letterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LETTER:
      return {
        selLetter: action.payload,
      };
    default:
      return state;
  }
};

export default letterReducer;
