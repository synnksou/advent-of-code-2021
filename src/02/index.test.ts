import { formatInput, partOne, partTwo } from './';

const partOneInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

test('gets correct part one sample answer', () => {
  expect(partOne(formatInput(partOneInput))).toBe(1635930);
});

test('gets correct part two sample answer', () => {
  expect(partTwo(formatInput(partOneInput))).toBe(1781819478);
});