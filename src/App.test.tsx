import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import App from './App';

describe('App integration test', () => {
  afterEach(cleanup);
  it('should render the app', () => {
    render(<App />);
  });
});
