export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isValid() {
    let noZeros = this.a !== 0 || this.b !== 0 || this.c !== 0;
    let longestSide = Math.max(this.a, this.b, this.c);
    let longEnoughSides = (this.a + this.b + this.c - longestSide) > longestSide;

    return noZeros && longEnoughSides;
  }

  isEquilateral() {
    return this.isValid() && this.a === this.b && this.b === this.c && this.a !== 0;
  }

  isIsosceles() {
    return this.isValid() && (this.a === this.b || this.a === this.c || this.b === this.c);
  }

  isScalene() {
    return this.isValid() && this.a !== this.b && this.a !== this.c && this.b !== this.c;
  }
}
