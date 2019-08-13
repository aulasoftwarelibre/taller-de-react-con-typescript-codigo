import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";
import { saga, sagaMiddleware } from "./saga";
import { Actions, State } from "./types";

const initialState: State = {
  counter: {
    value: 0
  }
};

const store: Store<State, Actions> = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
