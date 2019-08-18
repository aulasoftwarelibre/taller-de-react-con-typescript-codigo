import {
  InitCounterFailureAction,
  InitCounterRequestAction,
  InitCounterSuccessAction,
} from "../../counter/types";

export interface LoaderState {
  readonly isLoading: boolean;
  readonly hasError: boolean;
}

export type LoaderStoredState = {
  readonly loader: LoaderState;
};

export type LoaderActions =
  | InitCounterFailureAction
  | InitCounterRequestAction
  | InitCounterSuccessAction;
