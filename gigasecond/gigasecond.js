const GIGASECOND = 1000 * Math.pow(10, 9);

export const gigasecond = date => {
  return new Date(date.getTime() + GIGASECOND);
}
