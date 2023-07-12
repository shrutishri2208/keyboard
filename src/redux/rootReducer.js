import { combineReducers } from "redux";
import letterReducer from "./letter/letterReducer";
import stringReducer from "./string/stringReducer";

const rootReducer = combineReducers({
  selLetter: letterReducer,
  fullString: stringReducer,
});

export default rootReducer;
