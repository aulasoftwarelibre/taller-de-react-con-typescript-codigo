import createSagaMiddleware from "@redux-saga/core";
import { all, fork } from "redux-saga/effects";

import { saga as counterSaga } from "./counter/sagas";

export const sagaMiddleware = createSagaMiddleware();

export function* saga() {
  yield all([fork(counterSaga)]);
}
