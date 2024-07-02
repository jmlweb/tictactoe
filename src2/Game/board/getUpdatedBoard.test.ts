import { describe, expect, it } from 'vitest';

import getUpdatedBoard from './getUpdatedBoard';

describe('getUpdatedBoard', () => {
  it('throws an exception if the cell is already occupied', () => {
    expect(() =>
      getUpdatedBoard(
        ['X', null, null, null, null, null, null, null, null],
        0,
        'O',
      ),
    ).toThrow('Invalid move');
  });
  it('updates the board with the new move', () => {
    expect(
      getUpdatedBoard(
        ['X', null, null, null, null, null, null, null, null],
        1,
        'O',
      ),
    ).toEqual(['X', 'O', null, null, null, null, null, null, null]);
  });
});
