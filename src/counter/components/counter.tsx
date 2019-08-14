import * as React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

export interface Props {
  readonly step: number;
  readonly threshold: number;
  readonly onThresholdReached: (counter: number) => void;
}

const Counter: React.FunctionComponent<Props> = ({
  step,
  threshold,
  onThresholdReached
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    if (counter >= threshold) {
      onThresholdReached(counter);
    }
  }, [counter, onThresholdReached, threshold]);

  return (
    <Card>
      <Card.Content>
        <Card.Header>Contador</Card.Header>
        <Card.Description>El contador vale {counter}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            onClick={() => setCounter(counter + step)}
            basic
            color="green"
            icon={<Icon name="plus" />}
          />
          <Button
            onClick={() => setCounter(counter - step)}
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
