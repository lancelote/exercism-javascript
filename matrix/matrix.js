export class Matrix {
  constructor(string) {
    this._rows = null;
    this._columns = null;
    this._stringRows = string.split("\n");
  }

  get rows() {
    if (!this._rows) {
      this._rows = this._stringRows.map((stringRow) => stringRow.split(" ").map(Number));
    }
    return this._rows;
  }

  get columns() {
    if (!this._columns) {
      this._columns = this.rows[0].map((_, i) => this.rows.map((row) => row[i]));
    }
    return this._columns
  }
}
