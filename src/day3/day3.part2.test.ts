import { logAnswer } from '../utils/logging';
import { data } from './day3.data';
import { day3part2 } from './day3.part2';

test('Provided test cases', () => {
  expect(
    day3part2([
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ]),
  ).toBe(230);
});

test('Returns an answer', () => {
  logAnswer('Day 3 - Part 2', day3part2(data));
  expect(typeof day3part2(data)).toBe('number');
  expect(day3part2(data)).toBeGreaterThan(0);
});
