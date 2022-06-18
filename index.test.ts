import { describe } from "vitest";
import { it, expect } from "vitest";
import { Matrix } from "./index";

describe("matrix", () => {
  const exampleMatrix = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  describe("has", () => {
    it("works for (0, 0)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(0, 0)).toBe(true);
    });

    it("works for (0, last)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(0, 2)).toBe(true);
    });

    it("fails for (0, last + 1)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(0, 3)).toBe(false);
    });

    it("works for (last, last)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(2, 2)).toBe(true);
    });

    it("fails for (last + 1, last + 1)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(3, 3)).toBe(false);
    });

    it("works for (last, 0)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(2, 0)).toBe(true);
    });

    it("fails for (last + 1, 0)", () => {
      const m = new Matrix(exampleMatrix);
      expect(m.has(3, 0)).toBe(false);
    });
  });
});
