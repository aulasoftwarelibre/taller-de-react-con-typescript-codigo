import { combineReducers } from "redux";

import counterReducer from "./counter/reducers";
import { Actions, State } from "./types";

const reducer = combineReducers<State, Actions>({
  counter: counterReducer
});

export default reducer;
