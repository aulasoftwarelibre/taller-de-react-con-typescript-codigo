import * as React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

import Counter from "./counter/containers/counter";

const App: React.FunctionComponent = () => {
  return (
    <Body>
      <Counter step={2} />
    </Body>
  );
};

const Body = styled(Container)`
  margin-top: 64px;
`;

export default App;
