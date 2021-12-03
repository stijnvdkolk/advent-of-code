export const day2part2 = (
  input: `${'forward' | 'down' | 'up'} ${number}`[],
) => {
  let depth = 0,
    horizontal = 0,
    aim = 0;
  for (const instruction of input) {
    const [direction, stringAmount] = instruction.split(' ');
    const amount = Number(stringAmount);
    if (direction === 'up') {
      aim -= amount;
    } else if (direction === 'down') {
      aim += amount;
    } else if (direction === 'forward') {
      horizontal += amount;
      depth += aim * amount;
    }
  }
  return depth * horizontal;
};
