const aliquotSum = number => {
  if (number === 1) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < number / 2 + 1; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
}

const isPerfect = number => {
  return aliquotSum(number) === number;
};

const isAbundant = number => {
  return aliquotSum(number) > number;
}

const isDeficient = number => {
  return aliquotSum(number) < number;
}

const classify = number => {
  if (number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  if (isPerfect(number)) {
    return "perfect";
  } else if (isAbundant(number)) {
    return "abundant";
  } else if (isDeficient(number)) {
    return "deficient";
  }
};

module.exports = {aliquotSum, classify};
