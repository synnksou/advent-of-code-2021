export const formatInput = (input: string): number[] => {
  return input.split("\n").filter(Boolean).map(Number);
};

export const partOne = (input: number[]): any => {
  return input.reduce((prev, curr, index, array): any => {
    return Boolean(curr < array[index + 1]) ? prev + 1 : prev;
  }, 0);
};

 export const partTwo = (input: number[]): number => {
  return input.reduce((prev, curr, index, array): any => {
    const currSum = curr + array[index + 1] + array[index + 2];
    const nextSum = array[index + 1] + array[index + 2] + array[index + 3];
    return Boolean(currSum < nextSum) ? prev + 1 : prev;
  },0);
};
