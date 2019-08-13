import * as React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

interface Props {
  readonly threshold: number;
  readonly onThresholdReached: (counter: number) => void;
}

const Counter: React.FunctionComponent<Props> = ({
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
            onClick={() => setCounter(counter + 1)}
            basic
            color="green"
            icon={<Icon name="plus" />}
          />
          <Button
            onClick={() => setCounter(counter - 1)}
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
