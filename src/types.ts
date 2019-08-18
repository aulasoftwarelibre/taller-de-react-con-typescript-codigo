import { CounterActions, CounterStoredState } from "./counter/types";
import { LoaderActions, LoaderStoredState } from "./loader/types";

export type Actions = CounterActions & LoaderActions;

export type State = CounterStoredState & LoaderStoredState;
