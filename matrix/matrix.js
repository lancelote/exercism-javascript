export class Matrix {
  constructor(string) {
    this.stringRows = string.split("\n");
  }

  get rowLength() {
    return this.rows[0].length;
  }

  get rows() {
    return this.stringRows.map((stringRow) => stringRow.split(" ").map(Number));
  }

  get columns() {
    let cols = [];
    for (let i = 0; i < this.rowLength; i++) {
      cols.push(this.rows.map((row) => row[i]));
    }
    return cols;
  }
}
