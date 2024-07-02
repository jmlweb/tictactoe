import { Player, PLAYER_ONE, PLAYER_TWO } from './config';

const getNextPlayer = (currentPlayer: Player): Player =>
  currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;

export default getNextPlayer;
