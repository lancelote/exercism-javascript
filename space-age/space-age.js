const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const SECONDS_IN_YEAR = 31_557_600;

const roundAtTwoDecimalPlaces = floatNumber => {
  return Math.round(floatNumber * 100) / 100;
}


export const age = (planet, age) => {
  let resultAge = age / (ORBITAL_PERIOD[planet] * SECONDS_IN_YEAR)
  return roundAtTwoDecimalPlaces(resultAge);
};
