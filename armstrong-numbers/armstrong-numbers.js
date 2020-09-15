export const isArmstrongNumber = (number) => {
  let total = 0;
  let digits = number.toString();

  for (let digit of digits) {
    total += Math.pow(parseInt(digit), digits.length);
  }

  return total === number;
};
