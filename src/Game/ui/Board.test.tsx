import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import Board from './Board';

describe('Game.Board', () => {
  afterEach(cleanup);
  it('should render the board', () => {
    render(
      <Board>
        <p>Content</p>
      </Board>,
    );
    screen.getByText('Content');
  });
});
