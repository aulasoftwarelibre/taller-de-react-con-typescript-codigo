import { Action } from "redux";

export const INCREMENT_COUNTER = "@@counter/INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "@@counter/DECREMENT_COUNTER";

export interface CounterState {
  value: number;
}

export interface IncrementCounterAction extends Action {
  type: typeof INCREMENT_COUNTER;
  payload: {
    step: number;
  };
}

export interface DecrementCounterAction extends Action {
  type: typeof DECREMENT_COUNTER;
  payload: {
    step: number;
  };
}

export type CounterActions = IncrementCounterAction | DecrementCounterAction;

export type CounterStoredState = {
  readonly counter: CounterState;
};
