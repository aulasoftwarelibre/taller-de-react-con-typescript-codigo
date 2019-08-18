import * as React from "react";
import { useSelector } from "react-redux";
import { Dimmer, Header, Icon, Loader as SUILoader } from "semantic-ui-react";

import { getLoaderState } from "../reducers";
import { LoaderState } from "../types";

const Loader: React.FunctionComponent = ({ children }) => {
  const { hasError, isLoading }: LoaderState = useSelector(getLoaderState);

  return (
    <Dimmer.Dimmable>
      {children}
      <Dimmer active={isLoading}>
        <SUILoader />
      </Dimmer>
      <Dimmer active={hasError}>
        <Header as="h4" icon inverted>
          <Icon name="warning sign" />
          Error al cargar el contador
        </Header>
      </Dimmer>
    </Dimmer.Dimmable>
  );
};

export default Loader;
