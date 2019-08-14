import * as React from "react";

interface WithProps {
  step: number;
}

const withRandomStep = <P extends WithProps>(
  Component: React.ComponentType<P>
): React.FunctionComponent<Omit<P, keyof WithProps>> => (
  props: Omit<P, keyof WithProps>
) => {
  return (
    <Component {...props as P} step={Math.floor(Math.random() * 10 + 1)} />
  );
};

export default withRandomStep;
