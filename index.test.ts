import { it, expect } from "vitest";
import { add } from "./index";

it("works", () => {
  expect(add(1, 3)).toBe(4);
});
