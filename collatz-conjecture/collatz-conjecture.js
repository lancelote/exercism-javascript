export const steps = (number) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let count = 0;

  while (number !== 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = 3 * number + 1;
    }

    count++;
  }

  return count;
};
