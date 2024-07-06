import { CELL, Cell, Player } from './config';

const BOARD_LENGTH = 9;

const INITIAL_CELLS: Cell[] = Array.from(
  { length: BOARD_LENGTH },
  () => CELL.EMPTY,
);

const WINNING_LINES = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const parseCells = (cells: Cell[]) => {
  if (cells.length !== BOARD_LENGTH) {
    throw new Error('Invalid cells length');
  }
  return cells as [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
};

const auxDataCache: Record<
  string,
  {
    emptyCells: number[];
    isEmpty: boolean;
    isFull: boolean;
    isFinished: boolean;
    winningLine: number[] | null;
    winner: Player | null;
  }
> = {};

const makeAuxData = (
  cells: [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell],
) => {
  const key = cells.join('');
  if (typeof auxDataCache[key] === 'undefined') {
    const emptyCells = cells.flatMap((cell, index) =>
      cell === CELL.EMPTY ? [index] : [],
    );
    const isEmpty = emptyCells.length === BOARD_LENGTH;
    const isFull = emptyCells.length === 0;
    const isWinPossible = emptyCells.length <= BOARD_LENGTH - 5;
    const winningLine = isWinPossible
      ? WINNING_LINES.find(
          ([a, b, c]) =>
            cells[a] !== CELL.EMPTY &&
            cells[a] === cells[b] &&
            cells[a] === cells[c],
        ) ?? null
      : null;
    const winner = winningLine ? cells[winningLine[0]] || null : null;
    const isFinished = !!winner || isFull;
    auxDataCache[key] = {
      emptyCells,
      isEmpty,
      isFull,
      isFinished,
      winningLine,
      winner,
    };
  }
  return auxDataCache[key];
};

const Board = (rawCells: Cell[] = INITIAL_CELLS) => {
  const cells = parseCells(rawCells);
  const { emptyCells, isEmpty, isFull, isFinished, winningLine, winner } =
    makeAuxData(cells);

  const addMove = (cell: number, player: Player) => {
    if (isFinished) {
      throw new Error('Game is finished');
    }
    if (cells[cell] !== CELL.EMPTY) {
      throw new Error('Cell is not empty');
    }
    const newCells = [...cells];
    newCells[cell] = player;
    return Board(newCells);
  };

  const pretty = cells.reduce((acc, cell, index) => {
    if (index % 3 === 0) {
      acc += '\n';
    }
    acc = `${acc}[${cell === CELL.EMPTY ? ' ' : cell.toString()}]`;
    return acc;
  }, '');

  return {
    cells,
    emptyCells,
    isEmpty,
    isFull,
    isFinished,
    winningLine,
    winner,
    addMove,
    pretty,
  };
};

export default Board;
