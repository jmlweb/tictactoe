import * as v from 'valibot';

import { Options, OptionsSchema } from './schemas';

const OPTIONS_STORAGE_KEY = '3t_options';

const storageService = {
  get: () => {
    try {
      const rawOptions = localStorage.getItem(OPTIONS_STORAGE_KEY);
      if (!rawOptions) {
        return null;
      }
      return v.parse(OptionsSchema, JSON.parse(rawOptions));
    } catch (e) {
      return null;
    }
  },
  set: (options: Options) => {
    localStorage.setItem(OPTIONS_STORAGE_KEY, JSON.stringify(options));
  },
};

export default storageService;
