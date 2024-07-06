import { CELL, Player } from './config';

const getNextPlayer = (player: Player) =>
  player === CELL.PLAYER2 ? CELL.PLAYER1 : CELL.PLAYER2;

export default getNextPlayer;
