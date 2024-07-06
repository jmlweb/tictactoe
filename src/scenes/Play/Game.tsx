import * as React from 'react';

import { useSafeOptions } from '../../logic/options';
import useScore from './useScore';

const ScoreItem = React.memo(
  ({ playerName, score }: { playerName: string; score: number }) => (
    <p className="flex items-center text-sm">
      {playerName.toUpperCase()}:{' '}
      <span className="text-base font-bold">{score}</span>
    </p>
  ),
);

ScoreItem.displayName = 'ScoreItem';

const GameComponent = ({
  player1Name,
  player2Name,
}: {
  player1Name: string;
  player2Name: string;
}) => {
  const { score, incrementScore } = useScore();

  return (
    <>
      <div className="flex w-full max-w-lg flex-col items-center gap-4 self-start rounded-lg border border-slate-800 bg-slate-700/95 p-4 text-slate-200 shadow-lg">
        <p className="text-2xl">{player1Name} gana la partida</p>
        <button className="block w-full rounded-md bg-blue-600 p-3 text-lg font-medium text-white shadow-lg transition-colors hover:bg-blue-500">
          Jugar de nuevo
        </button>
      </div>
      <div className="flex w-full max-w-lg items-center justify-center gap-4 self-end rounded-lg border border-slate-800 bg-slate-700 px-4 py-2 text-slate-200 shadow-lg">
        <ScoreItem playerName={player1Name} score={score[0]} />
        <ScoreItem playerName={player2Name} score={score[1]} />
      </div>
    </>
  );
};

const Game = () => {
  const { difficulty, isVsCPU, playerNames } = useSafeOptions();

  const optionsKey = `${difficulty}-${isVsCPU ? 'vsCPU' : 'vsPlayer'}`;

  return (
    <GameComponent
      key={optionsKey}
      player1Name={`${playerNames[0]} (X)`}
      player2Name={`${isVsCPU ? 'cpu' : playerNames[1]} (O)`}
    />
  );
};

export default Game;
