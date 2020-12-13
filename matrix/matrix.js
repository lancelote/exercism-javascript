export class Matrix {
  #rows;
  #columns;
  #stringRows;

  constructor(string) {
    this.#stringRows = string.split("\n");
  }

  get rows() {
    if (!this.#rows) {
      this.#rows = this.#stringRows.map((stringRow) =>
        stringRow.split(" ").map(Number)
      );
    }
    return this.#rows;
  }

  get columns() {
    if (!this.#columns) {
      this.#columns = this.rows[0].map((_, i) =>
        this.rows.map((row) => row[i])
      );
    }
    return this.#columns;
  }
}
