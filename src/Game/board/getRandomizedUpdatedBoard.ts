import { Player } from '../players';
import { Board, getUpdatedBoard, isBoardFull } from '.';

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomizedUpdatedBoard = (board: Board, player: Player): Board => {
  if (isBoardFull(board)) {
    throw new Error('Board is full');
  }
  let index = getRandomInt(0, 8);
  while (board[index] != null) {
    index = getRandomInt(0, 8);
  }
  return getUpdatedBoard(board, index, player);
};

export default getRandomizedUpdatedBoard;
