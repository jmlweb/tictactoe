import { describe, expect, it } from 'vitest';

import { PLAYER_ONE, PLAYER_TWO } from './config';
import getNextPlayer from './getNextPlayer';

describe('getNextPlayer', () => {
  it('should return the next player', () => {
    expect(getNextPlayer(PLAYER_ONE)).toBe(PLAYER_TWO);
    expect(getNextPlayer(PLAYER_TWO)).toBe(PLAYER_ONE);
  });
});
