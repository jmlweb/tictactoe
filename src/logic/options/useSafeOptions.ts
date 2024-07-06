import useOptions from './useOptions';

const useSafeOptions = () => {
  const options = useOptions();
  if (!options) {
    throw new Error('Options not initialized');
  }
  return options;
};

export default useSafeOptions;
