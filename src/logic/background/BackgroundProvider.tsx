import * as React from 'react';

import { BACKGROUNDS } from '../backgrounds';
import { getRandomItem } from '../utils';
import BackgroundContext from './BackgroundContext';
import BackgroundDispatchersContext from './BackgroundDispatchersContext';

interface Props {
  children: React.ReactNode;
}

const formatImage = (image: string) => `/backgrounds/${image}.avif`;

const getRandomImage = () =>
  formatImage(getRandomItem(Object.keys(BACKGROUNDS)));

const BackgroundProvider = React.memo(({ children }: Props) => {
  const [background, internalSetBackground] =
    React.useState<string>(getRandomImage);

  const setBackground = React.useCallback((image: string) => {
    internalSetBackground(formatImage(image));
  }, []);

  const reloadBackground = React.useCallback(() => {
    internalSetBackground(getRandomImage());
  }, []);

  const dispatchersValue = React.useMemo(
    () => ({ setBackground, reloadBackground }),
    [setBackground, reloadBackground],
  );

  return (
    <BackgroundDispatchersContext.Provider value={dispatchersValue}>
      <BackgroundContext.Provider value={background}>
        {children}
      </BackgroundContext.Provider>
    </BackgroundDispatchersContext.Provider>
  );
});

BackgroundProvider.displayName = 'BackgroundProvider';

export default BackgroundProvider;
