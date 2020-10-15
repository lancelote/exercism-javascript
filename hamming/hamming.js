export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    if (dna1 === "") {
      throw new Error("left strand must not be empty");
    } else if (dna2 === "") {
      throw new Error("right strand must not be empty");
    } else {
      throw new Error("left and right strands must be of equal length");
    }
  }

  let distance = 0;
  for (let i = 0; i < dna1.length; i++) {
    if (dna1.charAt(i) !== dna2.charAt(i)) {
      distance += 1;
    }
  }
  return distance;
};
