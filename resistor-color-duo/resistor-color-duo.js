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

export const decodedValue = (colors) => {
  let [firstColor, secondColor] = colors;
  let firstColorIndex = COLORS.indexOf(firstColor);
  let secondColorIndex = COLORS.indexOf(secondColor);
  return Number(`${firstColorIndex}${secondColorIndex}`);
};
