import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";
import { Actions, State } from "./types";

const initialState: State = {
  counter: {
    value: 0
  }
};

const store: Store<State, Actions> = createStore(
  reducer,
  initialState,
  composeWithDevTools()
);

export default store;
