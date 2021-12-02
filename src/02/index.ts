export const formatInput = (input: string): string[] => {
  return input.split("\n").filter(Boolean).map(String);
};

export const partOne = (intput: string[]): number => {
  const position = intput.reduce(
    (total, _): any => {
      const number = Number(_.substr(_.length - 1));
      if (_.match(/forward/g)) {
        total.horizontaly += number;
        return total;
      } else if (_.match(/up/g)) {
        total.depth -= number;
        return total;
      } else {
        total.depth += number;
        return total;
      }
    },
    {horizontaly : 0, depth:0} 
  );
  return position.horizontaly * position.depth;
};

export const partTwo = (intput: string[]) => {
  const position = intput.reduce(
    (total, _): any => {
      const number = Number(_.substr(_.length - 1));
      if (_.match(/forward/g)) {
        total.horizontaly += number;
        total.depth += total.aim * number;
        return total;
      } else if (_.match(/up/g)) {
       total.aim -= number;
        return total;
      } else {
        total.aim += number;
        return total;
      }
    },
    {horizontaly : 0, depth:0, aim : 0} 
  );
  return position.horizontaly * position.depth;
};
