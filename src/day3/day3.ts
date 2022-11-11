export const day3 = (input: string[]) => {
  const bitsPerColumn = input[0]
    .split('')
    .map((_, index) => input.map((val) => Number(val[index])));

  const { gammas, epsilons } = getCommonBits(bitsPerColumn);

  const gamma = parseInt(gammas.join(''), 2);
  const epsilon = parseInt(epsilons.join(''), 2);
  return gamma * epsilon;
};

const getCommonBits = (input: number[][]) => {
  const gammas: number[] = [];
  const epsilons: number[] = [];

  for (const column of input) {
    const isOneCommon =
      column.filter((x) => x === 1).length > column.length / 2;

    gammas.push(isOneCommon ? 1 : 0);
    epsilons.push(isOneCommon ? 0 : 1);
  }

  return { gammas, epsilons };
};
