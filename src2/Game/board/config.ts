import { Player } from '../players';

type Cell = Player | null;

export type Board = Cell[];

export const INITIAL_BOARD: Board = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
