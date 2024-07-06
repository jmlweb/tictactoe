import { describe, expect, it } from 'vitest';

import Board from './board';

describe('Board', () => {
  it('should create an empty board by default', () => {
    const board = Board();
    expect(board.emptyCells).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(board.isFull).toBe(false);
    expect(board.isFinished).toBe(false);
    expect(board.winningLine).toBe(null);
    expect(board.winner).toBe(null);
  });
  it('should create a full board when provided', () => {
    const board = Board([1, 2, 1, 2, 1, 2, 2, 1, 2]);
    expect(board.emptyCells).toEqual([]);
    expect(board.isFull).toBe(true);
    expect(board.isFinished).toBe(true);
    expect(board.winningLine).toBe(null);
    expect(board.winner).toBe(null);
  });
  it('should detect winning lines', () => {
    const board = Board([1, 1, 1, 2, 1, 2, 2, 0, 2]);
    expect(board.emptyCells).toEqual([7]);
    expect(board.isFull).toBe(false);
    expect(board.isFinished).toBe(true);
    expect(board.winningLine).toEqual([0, 1, 2]);
    expect(board.winner).toBe(1);
  });
  it('should be able to add a move', () => {
    const board = Board([1, 0, 1, 2, 1, 2, 2, 0, 2]);
    expect(board.emptyCells).toEqual([1, 7]);
    expect(board.isFull).toBe(false);
    expect(board.isFinished).toBe(false);
    expect(board.winningLine).toBe(null);
    expect(board.winner).toBe(null);
    const newBoard = board.addMove(1, 1);
    expect(newBoard.emptyCells).toEqual([7]);
    expect(newBoard.isFull).toBe(false);
    expect(newBoard.isFinished).toBe(true);
    expect(newBoard.winningLine).toEqual([0, 1, 2]);
    expect(newBoard.winner).toBe(1);
  });
});
