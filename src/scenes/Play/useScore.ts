import * as React from 'react';

const useScore = () => {
  const [score, setScore] = React.useState([0, 0]);

  const incrementScore = React.useCallback((player: 0 | 1) => {
    setScore((prev) => {
      const newScore = [...prev];
      newScore[player] += 1;
      return newScore;
    });
  }, []);

  return { score, incrementScore };
};

export default useScore;
