import { combineReducers } from "redux";
import letterReducer from "./letter/letterReducer";
import stringReducer from "./string/stringReducer";
import capitalReducer from "./capital/capitalReducer";
import colourReducer from "./colour/colourReducer";

const rootReducer = combineReducers({
  selLetter: letterReducer,
  fullString: stringReducer,
  isCapital: capitalReducer,
  colour: colourReducer,
});

export default rootReducer;
