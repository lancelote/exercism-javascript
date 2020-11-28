const baseInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const baseRom = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

export const toRoman = (number) => {
  let result = [];

  for (let i = 0; i < baseInt.length; i++) {
    if (number >= baseInt[i]) {
      result.push(baseRom[i].repeat(number / baseInt[i]));
      number %= baseInt[i];
    }
  }

  return result.join("");
};
