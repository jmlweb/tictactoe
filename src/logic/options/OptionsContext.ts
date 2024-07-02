import * as React from 'react';

import { Options } from './schemas';

const OptionsContext = React.createContext<Options | null | undefined>(
  undefined,
);

export default OptionsContext;
