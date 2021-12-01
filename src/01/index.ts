export const formatInput = (input: string): number[] => {
  return input.split("\n").filter(Boolean).map(Number);
};

export const partOne = (input: number[]): any => {
  return input.reduce((prev, curr, index, array): any => {
    return Boolean(curr < array[index + 1]) ? prev + 1 : prev;
  }, 0);
};

export const partTwo = () => {};
