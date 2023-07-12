import { combineReducers } from "redux";
import letterReducer from "./letter/letterReducer";
import stringReducer from "./string/stringReducer";
import capitalReducer from "./capital/capitalReducer";

const rootReducer = combineReducers({
  selLetter: letterReducer,
  fullString: stringReducer,
  isCapital: capitalReducer,
});

export default rootReducer;
