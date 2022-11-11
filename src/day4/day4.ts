type Row = number[];
type Board = Row[];

export const day4 = (input: string[]) => {
  const draws = drawParser(input);
  const boards = boardParser(input);

  let usedNumbers: number[] = [],
    i = 0,
    running = true,
    sum = 0;

  while (running) {
    usedNumbers.push(draws[i++]);
    for (const board of boards) {
      if (isBoardFinished(board, usedNumbers)) {
        sum =
          getSumOfNumbersThatDidNotMatch(board, usedNumbers) *
          usedNumbers[usedNumbers.length - 1];
        running = false;
      }
    }
  }
  return sum;
};

const drawParser = (input: string[]) =>
  input[0]
    .split(',')
    .map((e) => e.trim())
    .filter((e) => e)
    .map(Number);

const boardParser = (input: string[]): Board[] => {
  input = input.slice(1);
  const boards: Board[] = [];
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == '') {
      boards.push([]);
    } else {
      boards[boards.length - 1].push(
        input[i]
          .split(' ')
          .filter((e) => e)
          .map((e) => e.trim())
          .map(Number),
      );
    }
  }
  return boards
    .map((e) => e.filter((e) => e.length > 0))
    .filter((e) => e.length > 0);
};

const getSumOfNumbersThatDidNotMatch = (board: Board, numbers: number[]) => {
  let sum = 0;
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      const number = board[x][y];
      if (!numbers.includes(number)) {
        sum += number;
      }
    }
  }
  return sum;
};

const isBoardFinished = (board: Board, numbers: number[]): boolean => {
  for (let x = 0; x < 5; x++) {
    let contains = true;
    for (let y = 0; y < 5; y++) {
      if (!numbers.includes(board[x][y])) {
        contains = false;
        break;
      }
    }
    if (contains) {
      return true;
    }
  }

  for (let y = 0; y < 5; y++) {
    let contains = true;
    for (let x = 0; x < 5; x++) {
      if (!numbers.includes(board[x][y])) {
        contains = false;
        break;
      }
    }

    if (contains) {
      return true;
    }
  }
  return false;
};
