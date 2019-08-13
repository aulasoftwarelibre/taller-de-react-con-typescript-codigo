import { Reducer } from "redux";

import {
  CounterActions,
  CounterState,
  CounterStoredState,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../types";

const initialState: CounterState = {
  value: 0
};

export const getCounterState = (store: CounterStoredState): CounterState =>
  store.counter;

const reducer: Reducer<CounterState, CounterActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + action.payload.step
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - action.payload.step
      };
    default:
      return state;
  }
};

export default reducer;
