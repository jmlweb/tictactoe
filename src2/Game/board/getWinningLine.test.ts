import { describe, expect, it } from 'vitest';

import { Board } from './config';
import getWinningLine from './getWinningLine';

describe('getWinningLine', () => {
  it('should return null if no winning line', () => {
    const board: Board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(getWinningLine(board)).toBe(null);
  });

  it('should return the winning line', () => {
    const board: Board = ['X', 'X', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(getWinningLine(board)).toEqual([0, 1, 2]);
  });
});
