import * as React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

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
      <Card>
        <Card.Content>
          <Card.Header>Contador</Card.Header>
          <Card.Description>El contador vale {counter}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => this.onIncrement(step)}
              basic
              color="green"
              icon={<Icon name="plus" />}
            />
            <Button
              onClick={() => this.onDecrement(step)}
              basic
              color="red"
              icon={<Icon name="minus" />}
            />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default Counter;
