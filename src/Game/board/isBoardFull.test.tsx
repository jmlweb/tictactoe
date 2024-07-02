import { describe, expect, it } from 'vitest';

import isBoardFull from './isBoardFull';

describe('isBoardFull', () => {
  it('returns true when the board is full', () => {
    const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    expect(isBoardFull(board)).toBe(true);
  });

  it('returns false when the board is not full', () => {
    const board = ['X', 'O', 'X', 'X', null, 'O', 'O', 'X', 'X'];
    expect(isBoardFull(board)).toBe(false);
  });
});
