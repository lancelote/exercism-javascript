const PLANET_ORBITAL_PERIOD_EARTH_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_YEAR_SECONDS = 31_557_600;

const round = (number, decimalPlaces = 2) => {
  const epsilon = Number.EPSILON;
  const base = Math.pow(10, decimalPlaces);
  return Math.round((number + epsilon) * base) / base;
};


export const age = (planet, ageSeconds) => {
  const planetYearSeconds = (
    PLANET_ORBITAL_PERIOD_EARTH_YEARS[planet] * EARTH_YEAR_SECONDS
  );
  return round(ageSeconds / planetYearSeconds);
};
