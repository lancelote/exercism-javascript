export const score = (x, y) => {
  const distance = Math.sqrt(x * x + y * y);
  let points = 0;

  if (distance <= 1) {
    points = 10;
  } else if (distance <= 5) {
    points = 5;
  } else if (distance <= 10) {
    points = 1;
  }

  return points;
};
