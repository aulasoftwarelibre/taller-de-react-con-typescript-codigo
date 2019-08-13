import { ActionCreator } from "redux";

import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_ASYNC,
  DecrementCounterAction,
  DecrementCounterAsyncAction,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_ASYNC,
  IncrementCounterAction,
  IncrementCounterAsyncAction,
  RESET_COUNTER,
  RESET_COUNTER_ASYNC,
  ResetCounterAction,
  ResetCounterAsyncAction,
} from "../types";

export const incrementCounter: ActionCreator<IncrementCounterAction> = (
  step: number
) => ({
  type: INCREMENT_COUNTER,
  payload: {
    step
  }
});

export const incrementCounterAsync: ActionCreator<
  IncrementCounterAsyncAction
> = (step: number) => ({
  type: INCREMENT_COUNTER_ASYNC,
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

export const decrementCounterAsync: ActionCreator<
  DecrementCounterAsyncAction
> = (step: number) => ({
  type: DECREMENT_COUNTER_ASYNC,
  payload: {
    step
  }
});

export const resetCounter: ActionCreator<ResetCounterAction> = () => ({
  type: RESET_COUNTER
});

export const resetCounterAsync: ActionCreator<
  ResetCounterAsyncAction
> = () => ({
  type: RESET_COUNTER_ASYNC
});
