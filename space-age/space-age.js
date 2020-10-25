const PLANET_ORBITAL_PERIOD_IN_EARTH_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const SECONDS_IN_EARTH_YEAR = 31_557_600;

const round = (number, decimalPlaces = 2) => {
  return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};


export const age = (planet, ageInSeconds) => {
  let orbitalPeriodInEarthYears = PLANET_ORBITAL_PERIOD_IN_EARTH_YEARS[planet];
  let secondsInPlanetYear = orbitalPeriodInEarthYears * SECONDS_IN_EARTH_YEAR;
  return round(ageInSeconds / secondsInPlanetYear);
};
