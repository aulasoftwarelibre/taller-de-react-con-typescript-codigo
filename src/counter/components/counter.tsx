import * as React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

interface Props {
  readonly counter: number;
  readonly step: number;
  readonly onIncrement: (step: number) => void;
  readonly onDecrement: (step: number) => void;
}

const Counter: React.FunctionComponent<Props> = ({
  counter,
  step,
  onIncrement,
  onDecrement
}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Contador</Card.Header>
        <Card.Description>El contador vale {counter}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            onClick={() => onIncrement(step)}
            basic
            color="green"
            icon={<Icon name="plus" />}
          />
          <Button
            onClick={() => onDecrement(step)}
            basic
            color="red"
            icon={<Icon name="minus" />}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
