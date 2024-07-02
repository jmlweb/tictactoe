import { useOptions } from '../../logic/options';
import useScore from './useScore';

const ScoreItem = ({
  playerName,
  score,
}: {
  playerName: string;
  score: number;
}) => (
  <p className="text-sm">
    {playerName.toUpperCase()}:{' '}
    <span className="text-base font-bold">{score}</span>
  </p>
);

const GameComponent = ({
  player1Name,
  player2Name,
}: {
  player1Name: string;
  player2Name: string;
}) => {
  const { score, incrementScore } = useScore();

  return (
    <div className="flex w-full max-w-lg justify-center gap-4 self-end rounded-lg border border-slate-800 bg-slate-700 p-2 text-slate-200 shadow-lg">
      <ScoreItem playerName={player1Name} score={score[0]} />
      <ScoreItem playerName={player2Name} score={score[1]} />
    </div>
  );
};

const Game = () => {
  const options = useOptions();

  if (!options) {
    throw new Error('Options not found');
  }

  const optionsKey = `${options.difficulty}-${options.isVsCPU ? 'vsCPU' : 'vsPlayer'}`;

  return (
    <GameComponent
      key={optionsKey}
      player1Name={options.playerNames[0]}
      player2Name={options.isVsCPU ? 'cpu' : options.playerNames[1]}
    />
  );
};

export default Game;
