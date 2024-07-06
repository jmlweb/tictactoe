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
      setOptions((prevOptions) => {
        if (
          !prevOptions ||
          prevOptions.difficulty !== newOptions.difficulty ||
          prevOptions.isVsCPU !== newOptions.isVsCPU ||
          prevOptions.playerNames.join(',') !== newOptions.playerNames.join(',')
        ) {
          storageService.set(newOptions);
          return newOptions;
        }
        return prevOptions;
      });
    },
    [],
  );

  const updateOption = React.useCallback<OptionsDispatchers['updateOption']>(
    (key, value) => {
      setOptions((prevOptions) => {
        if (!prevOptions) {
          throw new Error('Options not initialized');
        }
        if (
          (key !== 'playerNames' && prevOptions[key] !== value) ||
          (key === 'playerNames' &&
            Array.isArray(value) &&
            prevOptions.playerNames.join(',') !== value.join(','))
        ) {
          const newOptions = {
            ...prevOptions,
            [key]: value,
          };
          storageService.set(newOptions);
          return newOptions;
        }
        return prevOptions;
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
