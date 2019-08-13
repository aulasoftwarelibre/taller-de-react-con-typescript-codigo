import * as React from "react";

import Component from "../components/counter";

interface Props {
  readonly step: number;
}

interface State {
  readonly counter: number;
}

class Counter extends React.Component<Props, State> {
  state: Readonly<State> = {
    counter: 0
  };

  onIncrement = (step: number) => {
    this.setState({
      counter: this.state.counter + step
    });
  };

  onDecrement = (step: number) => {
    this.setState({
      counter: this.state.counter - step
    });
  };

  render(): React.ReactNode {
    const { counter } = this.state;
    const { step } = this.props;

    return (
      <>
        <Component
          counter={counter}
          step={step}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        <Component
          counter={counter}
          step={-step}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </>
    );
  }
}

export default Counter;
