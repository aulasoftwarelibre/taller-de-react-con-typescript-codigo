import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Icon } from "semantic-ui-react";

import {
  decrementCounter,
  decrementCounterAsync,
  incrementCounter,
  incrementCounterAsync,
  resetCounter,
  resetCounterAsync,
} from "../actions";
import { getCounterState } from "../reducers";
import { CounterState } from "../types";

export type Props = { step: number };

const Counter: React.FunctionComponent<Props> = ({ step }) => {
  const dispatch = useDispatch();
  const { value: counter }: CounterState = useSelector(getCounterState);

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Contador</Card.Header>
        <Card.Description>El contador vale {counter}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui six buttons">
          <Button
            onClick={() => dispatch(incrementCounterAsync(step))}
            basic
            color="green"
          >
            <i className="icons">
              <i className="plus icon" />
              <i className="corner clock icon" />
            </i>
          </Button>
          <Button
            onClick={() => dispatch(incrementCounter(step))}
            basic
            color="green"
            icon={<Icon name="plus" />}
          />
          <Button
            onClick={() => dispatch(resetCounter())}
            basic
            color="yellow"
            icon={<Icon name="repeat" />}
          />
          <Button
            onClick={() => dispatch(resetCounterAsync())}
            basic
            color="yellow"
          >
            <i className="icons">
              <i className="repeat icon" />
              <i className="corner clock icon" />
            </i>
          </Button>
          <Button
            onClick={() => dispatch(decrementCounter(step))}
            basic
            color="red"
            icon={<Icon name="minus" />}
          />
          <Button
            onClick={() => dispatch(decrementCounterAsync(step))}
            basic
            color="red"
          >
            <i className="icons">
              <i className="minus icon" />
              <i className="corner clock icon" />
            </i>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
