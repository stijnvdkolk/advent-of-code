import { logAnswer } from '../utils/logging';
import { day3 } from './day3';
import { data } from './day3.data';

test('Provided test cases', () => {
  expect(
    day3([
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
  ).toBe(198);
});

test('Returns an answer', () => {
  logAnswer('Day 3 - Part 1', day3(data));
  expect(typeof day3(data)).toBe('number');
  expect(day3(data)).toBeGreaterThan(0);
});
