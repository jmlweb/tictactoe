import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import Background from './Background';

describe('Layout.Background', () => {
  afterEach(cleanup);
  it('should render component', () => {
    render(
      <Background images={['bluey', 'little-einsteins', 'marcus-level']} />,
    );
  });
  it('should render an image', () => {
    render(
      <Background images={['bluey', 'little-einsteins', 'marcus-level']} />,
    );
    screen.getByAltText('');
  });
});
