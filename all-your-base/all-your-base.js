export const convert = (number, from_base, to_base) => {
  // valid from_base
  if (from_base < 2 || from_base % 1 !== 0) {
    throw new Error("Wrong input base");
  }
  // valid to_base
  if (to_base < 2 || to_base % 1 !== 0) {
    throw new Error("Wrong output base");
  }
  // empty array of zeros
  if (number.length === 0) {
    throw new Error("Input has wrong format");
  }
  // leading zeros
  if (number[0] === 0 && number.length > 1) {
    throw new Error("Input has wrong format");
  }

  // convert from the given base to decimal notation
  let decimal = 0;

  for (let digit of number) {
    if (digit >= from_base || digit < 0) {
      throw new Error("Input has wrong format");
    }
    decimal = from_base * decimal + digit;
  }

  // convert form the decimal notation to a target base
  let digits = [];

  do {
    digits.push(decimal % to_base);
    decimal = Math.floor(decimal / to_base);
  } while (decimal > 0);

  digits.reverse();
  return digits;
};
