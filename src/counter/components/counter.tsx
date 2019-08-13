import * as React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

class Counter extends React.Component {
  render(): React.ReactNode {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Contador</Card.Header>
          <Card.Description>El contador vale x</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" icon={<Icon name="plus" />} />
            <Button basic color="red" icon={<Icon name="minus" />} />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default Counter;
