import { logAnswer } from '../utils/logging';
import { data } from './day1.data';
import { checkifIncreased, day1part2 } from './day1.part2';
import { testData } from './day1.test.data';

test('Provided test cases', () => {
  expect(day1part2(testData)).toBe(5);
  expect(checkifIncreased(1, 2)).toBe(true);
  expect(checkifIncreased(1, 1)).toBe(false);
});

test('Returns an answer', () => {
  logAnswer('Day 1 - Part 2', day1part2(data));
  expect(typeof day1part2(data)).toBe('number');
  expect(day1part2(data)).toBeGreaterThan(0);
});
