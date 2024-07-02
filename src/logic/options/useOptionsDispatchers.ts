import * as React from 'react';

import OptionsDispatchersContext from './OptionsDispatchersContext';

const useOptionsDispatchers = () => {
  const context = React.useContext(OptionsDispatchersContext);

  if (typeof context === 'undefined') {
    throw new Error('useOptionsUpdaters must be used within a OptionsProvider');
  }

  return context;
};

export default useOptionsDispatchers;
