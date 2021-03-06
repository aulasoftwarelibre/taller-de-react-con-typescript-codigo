import * as React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

import Counter from "./counter/components/counter";
import Loader from "./loader/components/loader";

const App: React.FunctionComponent = () => {
  return (
    <Body>
      <Loader>
        <Counter step={1} />
      </Loader>
    </Body>
  );
};

const Body = styled(Container)`
  margin-top: 64px;
`;

export default App;
