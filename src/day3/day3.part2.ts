export const day3part2 = (input: string[]) => {
  const lineLength = input[0].length;
  let oxygenNumbers = [...input];

  for (let i = 0; i < lineLength; i++) {
    const commonBit = getCommonBit(oxygenNumbers, i);

    const target = commonBit === 0 ? '0' : '1';

    oxygenNumbers = oxygenNumbers.filter((number) => number[i] === target);

    if (oxygenNumbers.length === 1) break;
  }

  let co2Numbers = [...input];

  for (let i = 0; i < lineLength; i++) {
    const commonBit = getCommonBit(co2Numbers, i);

    const target = commonBit === 0 ? '1' : '0';

    co2Numbers = co2Numbers.filter((number) => number[i] === target);

    if (co2Numbers.length === 1) break;
  }

  const oxygenGeneratorRating = parseInt(oxygenNumbers[0], 2);
  const co2GeneratorRating = parseInt(co2Numbers[0], 2);
  return oxygenGeneratorRating * co2GeneratorRating;
};

const getCommonBit = (numbers: string[], position: number) => {
  let count = 0;
  numbers.forEach((number) => {
    count += Number(number[position]);
  });

  if (count === numbers.length / 2) return -1;

  return count < numbers.length / 2 ? 0 : 1;
};
