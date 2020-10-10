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

const valueOf = (color) => {
  return COLORS.indexOf(color);
}

export const decodedValue = ([firstColor, secondColor]) => {
  return Number(`${valueOf(firstColor)}${valueOf(secondColor)}`);
};
