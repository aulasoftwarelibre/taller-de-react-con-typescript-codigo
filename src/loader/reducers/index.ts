import { Reducer } from "redux";

import {
  INIT_COUNTER_FAILURE,
  INIT_COUNTER_REQUEST,
  INIT_COUNTER_SUCCESS,
} from "../../counter/types";
import { LoaderActions, LoaderState, LoaderStoredState } from "../types";

const initialState: LoaderState = {
  isLoading: false,
  hasError: false
};

export const getLoaderState = (store: LoaderStoredState): LoaderState =>
  store.loader;

const reducer: Reducer<LoaderState, LoaderActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INIT_COUNTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case INIT_COUNTER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case INIT_COUNTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
};

export default reducer;
