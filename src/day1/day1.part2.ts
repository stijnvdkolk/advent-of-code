export const checkifIncreased = (first: number, second: number): boolean => {
  if (second > first) {
    return true;
  } else {
    return false;
  }
};

export const day1part2 = (input: number[]) => {
  let previous = input[0] + input[1] + input[2];
  let increaseAmount = 0;

  for (let i = 0; i < input.length; i++) {
    const first = input[i];
    const second = input[i + 1];
    const third = input[i + 2];

    const increase = checkifIncreased(previous, first + second + third);
    if (increase) {
      increaseAmount++;
    }
    previous = first + second + third;
  }

  return increaseAmount;
};
