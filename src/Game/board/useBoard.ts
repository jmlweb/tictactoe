import * as React from 'react';

import { Player } from '../players';
import { INITIAL_BOARD } from './config';
import getRandomizedUpdatedBoard from './getRandomizedUpdatedBoard';
import getUpdatedBoard from './getUpdatedBoard';
import getWinningLine from './getWinningLine';
import isBoardFull from './isBoardFull';

const useBoard = () => {
  const [board, setBoard] = React.useState(INITIAL_BOARD);

  const resetBoard = React.useCallback(() => {
    setBoard(INITIAL_BOARD);
  }, []);
  const winningLine = getWinningLine(board);
  const winner = winningLine ? board[winningLine[0]] : null;
  const isGameFinished = winner != null || isBoardFull(board);
  const makeRandomMove = React.useCallback(
    (player: Player) => {
      if (!isGameFinished) {
        setBoard((prevBoard) => getRandomizedUpdatedBoard(prevBoard, player));
      }
    },
    [isGameFinished],
  );
  const makeHumanMove = React.useCallback(
    (player: Player, index: number) => {
      if (!isGameFinished) {
        setBoard((prevBoard) => getUpdatedBoard(prevBoard, index, player));
      }
    },
    [isGameFinished],
  );

  return {
    board,
    winningLine,
    winner,
    isGameFinished,
    makeRandomMove,
    makeHumanMove,
    resetBoard,
  };
};

export default useBoard;
