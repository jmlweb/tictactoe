import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import Root from './Root';

describe('Layout.Root', () => {
  afterEach(cleanup);
  it('should render the root', () => {
    render(
      <Root>
        <p>Content</p>
      </Root>,
    );
    screen.getByText('Content');
  });
});
