import * as React from 'react';

import BackgroundDispatchersContext from './BackgroundDispatchersContext';

const useBackgroundDispatchers = () => {
  const context = React.useContext(BackgroundDispatchersContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useBackgroundDispatchers must be used within a BackgroundProvider',
    );
  }

  return context;
};

export default useBackgroundDispatchers;
