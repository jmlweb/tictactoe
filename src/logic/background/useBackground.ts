import * as React from 'react';

import BackgroundContext from './BackgroundContext';

const useBackground = () => {
  const context = React.useContext(BackgroundContext);

  if (typeof context === 'undefined') {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }

  return context;
};

export default useBackground;
