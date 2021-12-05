export const formatInput = (input: string): string[] => {
  return input.split("\n").filter(Boolean).map(String);
};

/* export const partOne = (input: string[]): number => {
  input.reduce(
    (acc, curr): any => {
     const number = Number(curr.split(" ").map((char, index) => {
        return char == "1" ? +1  :  +0 
    }));/// FULL FLEMME

    console.log({number})
    },
    { gamma: 0, epsilon: 0 }
  );

  return 0;
}; */

export const partOne = (input: string[]): number => {
  const rate = { gamma: "", epsilon: "" };
  
  for (let index = 0; index < input[0].length; index++) {
    const values = { one: 0, zero: 0 };
    input.forEach((element) => {
      element[index] === "1" ? (values.one += 1) : (values.zero += 1);
    });

    if (values.one < values.zero) {
      rate.gamma += "0";
    } else {
      rate.gamma += "1";
    }
  }

  rate.gamma.split("").map((element) => {
    return element === "0" ? (rate.epsilon += "1") : (rate.epsilon += "0");
  });

  return Number(parseInt(rate.gamma, 2)) * Number(parseInt(rate.epsilon, 2));
};

export const partTwo = () => {};
