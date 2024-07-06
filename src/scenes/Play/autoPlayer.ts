import { Options } from '../../logic/options';
import { getRandomItem } from '../../logic/utils';
import Board from './board';
import { CELL, Player } from './config';
import getNextPlayer from './getNextPlayer';

const LEVEL_TO_MAX_DEPTH = {
  easy: () => 1,
  medium: () => getRandomItem([1, 2, 2, 3]),
  hard: () => 4,
};

const AutoPlayer = (
  level: Options['difficulty'],
  maximizingPlayer: Player = CELL.PLAYER2,
) => {
  const maxDepth = LEVEL_TO_MAX_DEPTH[level]();
  const minimax = (
    board: ReturnType<typeof Board>,
    player: Player,
    depth = 0,
    cell: number | null = null,
  ): [number, number | null] => {
    if (board.isEmpty) {
      return [
        0,
        level === 'easy'
          ? getRandomItem([0, 1, 2, 3, 4, 5, 6, 7, 8])
          : getRandomItem([0, 2, 4, 6, 8]),
      ];
    }

    const multiplier = player !== maximizingPlayer ? -1 : 1;

    if (board.isFinished || (maxDepth > 0 && depth >= maxDepth)) {
      if (board.winner === null) {
        return [0, cell];
      }
      return [(depth - 100) * multiplier, cell];
    }

    let bestScore = -Infinity * multiplier;
    let bestCell: number | null = null;

    for (const emptyCell of board.emptyCells) {
      const targetCell = cell ?? emptyCell;
      const newBoard = board.addMove(emptyCell, player);
      const [newScore] = minimax(
        newBoard,
        getNextPlayer(player),
        depth + 1,
        targetCell,
      );

      const difference = newScore * multiplier - bestScore * multiplier;
      if (difference >= 0) {
        bestScore = newScore;
        bestCell =
          difference > 0 ? targetCell : getRandomItem([targetCell, bestCell]);
      }
    }
    return [bestScore, bestCell];
  };

  return (board: ReturnType<typeof Board>) =>
    minimax(board, maximizingPlayer)[1];
};

export default AutoPlayer;
