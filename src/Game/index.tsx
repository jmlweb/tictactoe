import * as React from 'react';

import { useBoard } from './board';
import { PLAYER_ONE, PLAYER_TWO, usePlayers } from './players';
import * as UI from './ui';

const Game = () => {
  const [score, setScore] = React.useState({
    [PLAYER_ONE]: 0,
    [PLAYER_TWO]: 0,
  });
  const players = usePlayers();
  const {
    board,
    winningLine,
    winner,
    isGameFinished,
    makeRandomMove,
    makeHumanMove,
    resetBoard,
  } = useBoard();
  return (
    <>
      {isGameFinished ? (
        <div className="flex items-center justify-center border-l border-r border-t bg-slate-900/95 p-4 text-slate-50">
          {winner && (
            <p className="text-2xl">
              El jugador <strong className="font-bold">{winner}</strong> ha
              ganado
            </p>
          )}
          <button
            className="ml-4 inline-block bg-slate-50 p-2 text-sm text-slate-700 hover:bg-slate-200"
            onClick={() => {
              resetBoard();
              if (winner) {
                setScore((prevScore) => ({
                  ...prevScore,
                  [winner]: prevScore[winner] + 1,
                }));
              }
            }}
          >
            Jugar de nuevo
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center border-l border-r border-t bg-slate-900/95 p-4 text-slate-50">
          {([PLAYER_ONE, PLAYER_TWO] as const).map((player) => (
            <div key={player} className="w-min min-w-10 self-center text-right">
              {player}: <strong className="font-bold">{score[player]}</strong>
            </div>
          ))}
        </div>
      )}
      <UI.Board>
        {board.map((value, index) => (
          <UI.Cell
            key={index}
            value={value}
            nextValue={players.current}
            onClick={() => {
              if (!isGameFinished) {
                makeHumanMove(players.current, index);
                players.switch();
              }
            }}
            isWinning={winningLine?.includes(index)}
            isDisabled={isGameFinished}
          />
        ))}
      </UI.Board>
    </>
  );
};

export default Game;
