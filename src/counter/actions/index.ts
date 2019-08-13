import { ActionCreator } from "redux";

import {
  DECREMENT_COUNTER,
  DecrementCounterAction,
  INCREMENT_COUNTER,
  IncrementCounterAction,
} from "../types";

export const incrementCounter: ActionCreator<IncrementCounterAction> = (
  step: number
) => ({
  type: INCREMENT_COUNTER,
  payload: {
    step
  }
});

export const decrementCounter: ActionCreator<DecrementCounterAction> = (
  step: number
) => ({
  type: DECREMENT_COUNTER,
  payload: {
    step
  }
});
