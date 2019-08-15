import {
  all,
  delay,
  fork,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  decrementCounter,
  incrementCounter,
  initCounterFailure,
  initCounterRequest,
  initCounterSuccess,
} from "../actions";
import { readCounter, updateCounter } from "../api";
import { getCounterState } from "../reducers";
import {
  CounterState,
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_ASYNC,
  DecrementCounterAsyncAction,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_ASYNC,
  IncrementCounterAsyncAction,
  RESET_COUNTER,
  RESET_COUNTER_ASYNC,
} from "../types";

function* handleResetCounterAsync() {
  while (true) {
    let { value: counter }: CounterState = yield select(getCounterState);

    if (counter < 0) {
      yield put(incrementCounter(1));
    } else if (counter > 0) {
      yield put(decrementCounter(1));
    } else {
      break;
    }

    yield delay(200);
  }
}

function* watchHandleResetCounterAsync() {
  yield takeLatest(RESET_COUNTER_ASYNC, handleResetCounterAsync);
}

function* handleIncrementCounterAsync({
  payload: { step }
}: IncrementCounterAsyncAction) {
  yield delay(1000);

  yield put(incrementCounter(step));
}

function* watchIncrementCounterAsync() {
  yield takeEvery(INCREMENT_COUNTER_ASYNC, handleIncrementCounterAsync);
}

function* handleDecrementCounterAsync({
  payload: { step }
}: DecrementCounterAsyncAction) {
  yield delay(1000);

  yield put(decrementCounter(step));
}

function* watchDecrementCounterAsync() {
  yield takeEvery(DECREMENT_COUNTER_ASYNC, handleDecrementCounterAsync);
}

function* handleUpdateCounter() {
  try {
    const { value: counter }: CounterState = yield select(getCounterState);

    yield updateCounter(counter);
  } catch (e) {}
}

function* watchUpdateCounter() {
  yield takeLatest(
    [INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER],
    handleUpdateCounter
  );
}

function* handleInitCounter() {
  yield put(initCounterRequest());
  yield delay(1000);

  try {
    const {
      data: { value }
    }: { data: { value: number } } = yield readCounter();

    yield put(initCounterSuccess(value));
  } catch (e) {
    yield put(initCounterFailure());
  }
}

export function* saga() {
  yield all([
    fork(watchIncrementCounterAsync),
    fork(watchDecrementCounterAsync),
    fork(watchHandleResetCounterAsync),
    fork(watchUpdateCounter),
    fork(handleInitCounter)
  ]);
}
