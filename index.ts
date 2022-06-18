export class Matrix {
  #matrix: string[][];

  constructor(matrix: string[][]) {
    this.#matrix = matrix;
  }

  has(x: number, y: number) {
    if (this.#matrix.length <= y) return false;
    if (this.#matrix[y].length <= x) return false;
    return true;
  }

  get(x: number, y: number): string | false {
    if (this.has(x, y)) {
      return this.#matrix[y][x];
    }
    return false;
  }
}

class WordSearch {
  // matrix of chars
  #words: string[][];

  constructor(matrix: string[]) {
    this.#words = matrix.map((row) => row.split(""));
  }

  find(words: string[]) {
    for (const word of words) {
    }
  }
}
