const countMines = (i, j, field) => {
  const height = field.length;
  const width = field[i].length;

  let top = i > 0 ? field[i - 1][j] : " ";
  let topRight = i > 0 && j < width - 1 ? field[i - 1][j + 1] : " ";
  let right = j < width - 1 ? field[i][j + 1] : " ";
  let bottomRight = i < height - 1 && j < width - 1 ? field[i + 1][j + 1] : " ";
  let bottom = i < height - 1 ? field[i + 1][j] : " ";
  let bottomLeft = i < height - 1 && j > 0 ? field[i + 1][j - 1] : " ";
  let left = j > 0 ? field[i][j - 1] : " ";
  let topLeft = i > 0 && j > 0 ? field[i - 1][j - 1] : " ";

  let around = [
    top,
    topRight,
    right,
    bottomRight,
    bottom,
    bottomLeft,
    left,
    topLeft,
  ];
  let mines = around.filter((x) => x === "*").length;
  return mines !== 0 ? mines.toString() : " ";
};

export const annotate = (input) => {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let row = [];
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === " ") {
        row.push(countMines(i, j, input));
      } else {
        row.push("*");
      }
    }
    result.push(row.join(""));
  }
  return result;
};
