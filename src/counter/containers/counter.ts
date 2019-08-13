import { Dispatch } from "react";
import { connect } from "react-redux";

import { decrementCounter, incrementCounter } from "../actions";
import Counter, {
  PropsFromDispatch,
  PropsFromState,
} from "../components/counter";
import { CounterActions, CounterStoredState } from "../types";

const mapStateToProps = (state: CounterStoredState): PropsFromState => ({
  counter: state.counter.value
});

const mapDispatchToProps = (
  dispatch: Dispatch<CounterActions>
): PropsFromDispatch => ({
  onIncrement: (step: number) => dispatch(incrementCounter(step)),
  onDecrement: (step: number) => dispatch(decrementCounter(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
