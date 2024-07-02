import * as React from 'react';

import { Player, PLAYER_ONE, PLAYER_TWO } from './config';
import getNextPlayer from './getNextPlayer';

const players = [PLAYER_ONE, PLAYER_TWO] as const;

const getRandomPlayer = () =>
  players[Math.floor(Math.random() * players.length)];

const usePlayers = () => {
  const [current, setCurrent] = React.useState<Player>(() => getRandomPlayer());

  return React.useMemo(
    () => ({
      current,
      switch: () => {
        setCurrent(getNextPlayer);
      },
      reset: () => {
        setCurrent(getRandomPlayer());
      },
    }),
    [current],
  );
};

export default usePlayers;
