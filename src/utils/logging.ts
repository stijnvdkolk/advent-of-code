export const logAnswer = (
  dayAndPart: `Day ${number} - Part ${1 | 2}`,
  answer: any,
) => {
  process.stdout.write(`\n\n-----------------
${dayAndPart} - Answer: ${answer}
-----------------\n\n`);
};

export const log = (...args: any[]) => {
  process.stdout.write(`${args.join(', ')}\n\n`);
};
