import { Board } from './config';

const getUpdatedBoard = (
  board: Board,
  index: number,
  player: Board[number],
): Board => {
  if (board[index] != null && board[index] !== player) {
    throw new Error('Invalid move');
  }
  const updatedBoard = [...board];
  updatedBoard[index] = player;
  return updatedBoard;
};

export default getUpdatedBoard;
