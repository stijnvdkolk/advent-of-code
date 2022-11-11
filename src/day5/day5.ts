const heatmap: number[][] = [];
export const day5 = (input: string) => {
  const vents = input.split('\n').map((v) => {
    const coords = v.split(' -> ');
    return [
      ...coords[0].split(',').map((n) => parseInt(n)),
      ...coords[1].split(',').map((n) => parseInt(n)),
    ];
  });

  return 5;
};
