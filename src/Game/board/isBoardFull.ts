import { Board } from './config';

const isBoardFull = (board: Board): boolean =>
  board.every((cell) => cell !== null);

export default isBoardFull;
