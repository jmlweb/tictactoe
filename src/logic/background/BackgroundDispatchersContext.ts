import * as React from 'react';

export interface BackgroundDispatchers {
  setBackground: (newBackground: string) => void;
  reloadBackground: () => void;
}

const BackgroundDispatchersContext = React.createContext<
  BackgroundDispatchers | undefined
>(undefined);

export default BackgroundDispatchersContext;
