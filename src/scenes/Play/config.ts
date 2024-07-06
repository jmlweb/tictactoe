export const CELL = {
  EMPTY: 0,
  PLAYER1: 1,
  PLAYER2: 2,
} as const;

export type Cell = (typeof CELL)[keyof typeof CELL];
export type Player = Exclude<Cell, typeof CELL.EMPTY>;
