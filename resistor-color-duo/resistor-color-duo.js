const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]

const resistanceValue = color => COLORS.indexOf(color);

export const decodedValue = ([firstColor, secondColor]) => {
  return resistanceValue(firstColor) * 10 + resistanceValue(secondColor);
}
