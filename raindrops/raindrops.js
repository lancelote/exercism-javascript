export const convert = number => {
  let sounds = [];

  if (number % 3 === 0) {
    sounds.push("Pling");
  }
  if (number % 5 === 0) {
    sounds.push("Plang");
  }
  if (number % 7 === 0) {
    sounds.push("Plong");
  }

  return sounds.length === 0 ? number.toString() : sounds.join("");
};
