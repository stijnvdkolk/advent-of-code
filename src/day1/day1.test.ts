import { logAnswer } from '../utils/logging';
import { checkifIncreased, day1 } from './day1';
import { data } from './day1.data';
import { testData } from './day1.test.data';

test('Provided test cases', () => {
  expect(day1(testData)).toBe(7);
  expect(checkifIncreased(1, 2)).toBe(true);
  expect(checkifIncreased(1, 1)).toBe(false);
});

test('Returns an answer', () => {
  logAnswer('Day 1 - Part 1', day1(data));
  expect(typeof day1(data)).toBe('number');
  expect(day1(data)).toBeGreaterThan(0);
});
