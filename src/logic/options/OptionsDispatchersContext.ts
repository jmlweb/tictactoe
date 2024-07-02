import * as React from 'react';

import { Options } from './schemas';

export interface OptionsDispatchers {
  updateOptions: (newOptions: Options) => void;
  updateOption: <K extends keyof Options>(key: K, value: Options[K]) => void;
}

const OptionsDispatchersContext = React.createContext<
  OptionsDispatchers | undefined
>(undefined);

export default OptionsDispatchersContext;
