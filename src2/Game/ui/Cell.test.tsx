import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import Cell from './Cell';

describe('Game.Cell', () => {
  afterEach(cleanup);
  it('should render the cell', () => {
    render(<Cell value="s" />);
    screen.getByText('S');
  });
});
