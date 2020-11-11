export class Matrix {
  constructor(string) {
    this.rows = [];

    for (const stringRow of string.split("\n")) {
      const intRow = stringRow.split(" ").map(item => Number(item));
      this.rows.push(intRow);
    }
  }

  get rowLength() {
    return this.rows[0].length;
  }

  get columns() {
    let cols = [];
    for (let i = 0; i < this.rowLength; i++) {
      let col = [];
      for (const row of this.rows) {
        col.push(row[i]);
      }
      cols.push(col);
    }
    return cols;
  }
}
