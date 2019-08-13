import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Icon } from "semantic-ui-react";

import { decrementCounter, incrementCounter } from "../actions";
import { getCounterState } from "../reducers";
import { CounterState } from "../types";

export type Props = { step: number };

const Counter: React.FunctionComponent<Props> = ({ step }) => {
  const dispatch = useDispatch();
  const { value: counter }: CounterState = useSelector(getCounterState);

  return (
    <Card>
      <Card.Content>
        <Card.Header>Contador</Card.Header>
        <Card.Description>El contador vale {counter}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            onClick={() => dispatch(incrementCounter(step))}
            basic
            color="green"
            icon={<Icon name="plus" />}
          />
          <Button
            onClick={() => dispatch(decrementCounter(step))}
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
