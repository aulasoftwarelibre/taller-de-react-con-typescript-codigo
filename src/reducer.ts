import { combineReducers } from "redux";

import counterReducer from "./counter/reducers";
import loaderReducer from "./loader/reducers";
import { Actions, State } from "./types";

const reducer = combineReducers<State, Actions>({
  counter: counterReducer,
  loader: loaderReducer
});

export default reducer;
