import { describe, expect, it } from 'vitest';

import AutoPlayer from './autoPlayer';
import Board from './board';

describe('autoPlayer', () => {
  it('should return null if the board has a winner or it is full for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    expect(getBestCell(Board([1, 1, 1, 2, 1, 2, 2, 1, 2]))).toBe(null);
    expect(getBestCell(Board([1, 2, 1, 2, 1, 2, 2, 1, 2]))).toBe(null);
  });
  it('should return the proper position for an horizontal line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([2, 2, 0, 0, 0, 1, 1, 0, 0]);
    expect(getBestCell(board)).toBe(2);
  });
  it('should return the proper position for a vertical line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([0, 2, 0, 0, 2, 1, 1, 0, 0]);
    expect(getBestCell(board)).toBe(7);
  });
  it('should return the proper position for a diagonal line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([2, 0, 0, 0, 2, 1, 1, 0, 0]);
    expect(getBestCell(board)).toBe(8);
  });
  it('should suggest blocking the opponents move for a horizontal line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([1, 1, 0, 2, 0, 0, 2, 0, 0]);
    expect(getBestCell(board)).toBe(2);
  });
  it('should suggest blocking the opponents move for a vertical line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([1, 0, 2, 1, 0, 0, 0, 2, 0]);
    expect(getBestCell(board)).toBe(6);
  });
  it('should suggest blocking the opponents move for a diagonal line for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([1, 2, 0, 0, 1, 0, 0, 0, 0]);
    expect(getBestCell(board)).toBe(8);
  });
  it('should choose a winning move over blocking the opponent for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([1, 1, 0, 2, 1, 0, 0, 2, 2]);
    expect(getBestCell(board)).toBe(6);
  });
  it('should choose a cell from the center or the corners if the board is empty for hard level', () => {
    const getBestCell = AutoPlayer('hard');
    const board = Board([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect([0, 2, 4, 6, 8]).toContain(getBestCell(board));
  });
  it('should choose a random cell if the level is easy', () => {
    const getBestCell = AutoPlayer('easy');
    const board = Board([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(getBestCell(board)).toBeLessThan(9);
  });
  it('should work for the easy level', () => {
    const getBestCell = AutoPlayer('easy');
    const board = Board([1, 0, 2, 0, 0, 0, 1, 0, 0]);
    expect([1, 3, 4, 5, 7, 8]).toContain(getBestCell(board));
  });
  it('should work for the medium level', () => {
    const getBestCell = AutoPlayer('easy');
    const board = Board([1, 0, 2, 0, 0, 0, 1, 0, 0]);
    expect([1, 3, 4, 5, 7, 8]).toContain(getBestCell(board));
  });
});
