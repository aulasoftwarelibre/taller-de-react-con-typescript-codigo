import { Action } from "redux";

export const INCREMENT_COUNTER = "@@counter/INCREMENT_COUNTER";
export const INCREMENT_COUNTER_ASYNC = "@@counter/INCREMENT_COUNTER_ASYNC";
export const DECREMENT_COUNTER = "@@counter/DECREMENT_COUNTER";
export const DECREMENT_COUNTER_ASYNC = "@@counter/DECREMENT_COUNTER_ASYNC";
export const RESET_COUNTER = "@@counter/RESET_COUNTER";
export const RESET_COUNTER_ASYNC = "@@counter/RESET_COUNTER_ASYNC";
export const INIT_COUNTER = "@@counter/INIT_COUNTER";
export const INIT_COUNTER_REQUEST = "@@counter/INIT_COUNTER_REQUEST";
export const INIT_COUNTER_SUCCESS = "@@counter/INIT_COUNTER_SUCCESS";
export const INIT_COUNTER_FAILURE = "@@counter/INIT_COUNTER_FAILURE";

export interface CounterState {
  value: number;
}

export type CounterStoredState = {
  readonly counter: CounterState;
};

export interface IncrementCounterAction extends Action {
  type: typeof INCREMENT_COUNTER;
  payload: {
    step: number;
  };
}

export interface IncrementCounterAsyncAction extends Action {
  type: typeof INCREMENT_COUNTER_ASYNC;
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

export interface DecrementCounterAsyncAction extends Action {
  type: typeof DECREMENT_COUNTER_ASYNC;
  payload: {
    step: number;
  };
}

export interface ResetCounterAction extends Action {
  type: typeof RESET_COUNTER;
}

export interface ResetCounterAsyncAction extends Action {
  type: typeof RESET_COUNTER_ASYNC;
}

export interface InitCounterRequestAction extends Action {
  type: typeof INIT_COUNTER_REQUEST;
}

export interface InitCounterSuccessAction extends Action {
  type: typeof INIT_COUNTER_SUCCESS;
  payload: {
    value: number;
  };
}

export interface InitCounterFailureAction extends Action {
  type: typeof INIT_COUNTER_FAILURE;
}

export type CounterActions =
  | IncrementCounterAction
  | IncrementCounterAsyncAction
  | DecrementCounterAction
  | DecrementCounterAsyncAction
  | ResetCounterAction
  | ResetCounterAsyncAction
  | InitCounterRequestAction
  | InitCounterSuccessAction
  | InitCounterFailureAction;
