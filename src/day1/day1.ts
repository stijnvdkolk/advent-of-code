export const checkifIncreased = (first: number, second: number): boolean => {
  if (second > first) {
    return true;
  } else {
    return false;
  }
};

export const day1 = (input: number[]) => {
  let previous = input[0];
  let increaseAmount = 0;

  for (const measurement of input) {
    if (checkifIncreased(previous, measurement)) {
      increaseAmount++;
    }
    previous = measurement;
  }
  return increaseAmount;
};
