import * as React from 'react';

import OptionsContext from './OptionsContext';
import OptionsDispatchersContext, {
  OptionsDispatchers,
} from './OptionsDispatchersContext';
import { Options } from './schemas';
import storageService from './storageService';

interface Props {
  children: React.ReactNode;
}

const OptionsProvider = ({ children }: Props) => {
  const [options, setOptions] = React.useState<Options | null>(() =>
    storageService.get(),
  );

  const updateOptions = React.useCallback<OptionsDispatchers['updateOptions']>(
    (newOptions) => {
      setOptions(newOptions);
      storageService.set(newOptions);
    },
    [],
  );

  const updateOption = React.useCallback<OptionsDispatchers['updateOption']>(
    (key, value) => {
      setOptions((prevOptions) => {
        if (!prevOptions) {
          throw new Error('Options not initialized');
        }
        const newOptions = {
          ...prevOptions,
          [key]: value,
        };
        storageService.set(newOptions);
        return newOptions;
      });
    },
    [],
  );

  const updaterValue = React.useMemo(
    () => ({
      updateOptions,
      updateOption,
    }),
    [updateOptions, updateOption],
  );

  return (
    <OptionsDispatchersContext.Provider value={updaterValue}>
      <OptionsContext.Provider value={options}>
        {children}
      </OptionsContext.Provider>
    </OptionsDispatchersContext.Provider>
  );
};

export default OptionsProvider;
