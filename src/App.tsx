import * as React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

import Counter from "./counter/components/counter";
import withRandomStep from "./counter/hoc/withRandomStep";

const App: React.FunctionComponent = () => {
  return (
    <Body>
      <RandomStepCounter
        threshold={7}
        onThresholdReached={counter => console.log(`Counter vale ${counter}`)}
      />
    </Body>
  );
};

const RandomStepCounter = withRandomStep(Counter);

const Body = styled(Container)`
  margin-top: 64px;
`;

export default App;
