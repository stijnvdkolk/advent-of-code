const getDelimiter = (input: string) => {
  if (input.includes(',')) {
    return ',';
  }
  if (input.includes('\n')) {
    return '\n';
  }
  return '';
};

const mapToNumberIfNecessary = (input: string[]) => {
  if (input.every((value) => !isNaN(Number(value)))) {
    return input.map((e) => Number(e));
  }
  return input;
};

export function parseInput(input: string, keepString: true): string[];
export function parseInput(
  input: string,
  keepString?: false,
): (string | number)[];

export function parseInput(
  input: string,
  keepString = false,
): (string | number)[] {
  const inputArray = input.split(getDelimiter(input));
  const trimmed = inputArray.map((e) => e.trim());
  return keepString ? trimmed : mapToNumberIfNecessary(trimmed);
}
