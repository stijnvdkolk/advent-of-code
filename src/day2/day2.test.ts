import { logAnswer } from '../utils/logging';
import { day2 } from './day2';
import { data } from './day2.data';

test('Provided test cases', () => {
  expect(
    day2(['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']),
  ).toBe(150);
});

test('Returns an answer', () => {
  logAnswer('Day 2 - Part 1', day2(data));
  expect(typeof day2(data)).toBe('number');
  expect(day2(data)).toBeGreaterThan(0);
});
