export const day2 = (input: `${'forward' | 'down' | 'up'} ${number}`[]) => {
  let depth = 0,
    horizontal = 0;
  for (const instruction of input) {
    const [direction, amount] = instruction.split(' ');
    if (direction === 'up') {
      depth -= Number(amount);
    } else if (direction === 'down') {
      depth += Number(amount);
    } else if (direction === 'forward') {
      horizontal += Number(amount);
    }
  }
  return depth * horizontal;
};
