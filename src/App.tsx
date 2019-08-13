import * as React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const App: React.FunctionComponent = () => {
  return <Body>Hello world</Body>;
};

const Body = styled(Container)`
  margin-top: 64px;
`;

export default App;
