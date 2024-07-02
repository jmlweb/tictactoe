import * as React from 'react';
import * as v from 'valibot';

import { DifficultySchema, Options, useOptions } from '../../logic/options';

const PARSED_DIFFICULTY: Record<string, string> = {
  easy: 'Fácil',
  medium: 'Medio',
  hard: 'Difícil',
};

const OptionsForm = ({
  onSubmit,
  label = 'Comenzar partida',
}: {
  onSubmit: (options: Options) => void;
  label?: string;
}) => {
  const {
    difficulty: initialDifficulty = 'medium',
    playerNames: initialPlayerNames = ['x', 'o'] as Options['playerNames'],
    isVsCPU: initialIsVsCPU = true,
  } = useOptions() ?? {};

  const [difficulty, setDifficulty] = React.useState(initialDifficulty);
  const [playerNames, setPlayerNames] = React.useState(initialPlayerNames);
  const [isVsCPU, setIsVsCPU] = React.useState(initialIsVsCPU);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ difficulty, playerNames, isVsCPU });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex items-center gap-1 rounded border border-slate-600 bg-slate-950/30 px-3 py-2">
        <input
          type="checkbox"
          checked={isVsCPU}
          className="size-4"
          onChange={(event) => {
            setIsVsCPU(event.target.checked);
          }}
        />
        Quiero jugar solo
      </label>
      <div className="flex flex-col">
        Dificultad:
        <div className="mt-1 flex gap-4">
          {['easy', 'medium', 'hard'].map((item) => (
            <label
              key={item}
              className={[
                'flex items-center gap-1 rounded px-3 py-2 font-medium',
                difficulty === item
                  ? 'bg-blue-300 text-blue-900'
                  : 'bg-slate-950/40',
              ].join(' ')}
            >
              <input
                type="radio"
                value={item}
                className="sr-only"
                checked={difficulty === item}
                onChange={(event) => {
                  setDifficulty(v.parse(DifficultySchema, event.target.value));
                }}
              />
              {PARSED_DIFFICULTY[item]}
            </label>
          ))}
        </div>
      </div>
      <div className="mt-1 flex gap-4 text-sm">
        <label>
          Jugador 1:
          <input
            type="text"
            value={playerNames[0]}
            className="mt-1 w-full rounded bg-slate-800 p-2 text-base"
            onChange={(event) => {
              setPlayerNames([event.target.value, playerNames[1]]);
            }}
          />
        </label>
        <label
          className={isVsCPU ? 'cursor-not-allowed opacity-60' : undefined}
        >
          Jugador 2:
          <input
            type="text"
            value={isVsCPU ? 'cpu' : playerNames[1]}
            className="mt-1 w-full rounded bg-slate-800 p-2"
            onChange={(event) => {
              setPlayerNames([playerNames[0], event.target.value]);
            }}
            disabled={isVsCPU}
          />
        </label>
      </div>
      <button
        className="mt-2 rounded-md bg-blue-500 p-2 font-medium text-blue-50 shadow-md transition-colors hover:bg-blue-600"
        type="submit"
      >
        {label}
      </button>
    </form>
  );
};

export default OptionsForm;
