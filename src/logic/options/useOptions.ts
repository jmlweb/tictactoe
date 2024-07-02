import * as React from 'react';

import OptionsContext from './OptionsContext';

const useOptions = () => {
  const context = React.useContext(OptionsContext);

  if (typeof context === 'undefined') {
    throw new Error('useOptions must be used within a OptionsProvider');
  }

  return context;
};

export default useOptions;
