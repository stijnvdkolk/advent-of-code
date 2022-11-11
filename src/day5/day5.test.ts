// import { logAnswer } from '../utils/logging';
import { day5 } from './day5';
// import { data } from './day5.data';

test('Provided test cases', () => {
  expect(
    day5(`0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`),
  ).toBe(5);
});

// test('Returns an answer', () => {
//   logAnswer('Day 5 - Part 1', day5(data));
//   expect(typeof day5(data)).toBe('number');
//   expect(day5(data)).toBeGreaterThan(0);
// });
