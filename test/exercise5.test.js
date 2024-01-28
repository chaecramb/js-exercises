import {
  sumMultiples,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("Pikachu");
    }).toThrow("arr is required");
  });
  test("return the sum of any numbers which are a multiple of 3 or 5 in the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([2, 8, 30, 75, 99, 205])).toBe(409);
  });

  test("return 0 if there are no multiples of 3 or 5 in the array", () => {
    expect(sumMultiples([])).toBe(0);
    expect(sumMultiples([1, 4, 8, 101])).toBe(0);
  });

  test("it works with decimals", () => {
    expect(sumMultiples([1, 40.0, 8.05, 12.0])).toBe(52);
  });
});

describe("createMatrix", () => {
  it("returns a matrix of 1 * 1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result.toEqual(expected));
  });
});

test("returns false if there are staff but < 3 not scheduled to work", () => {
  const staff = [
    { name: "gary", rota: ["Monday", "Tuesday"] },
    { name: "paul", rota: ["Monday", "Tuesday"] },
    { name: "sally", rota: ["Monday", "Tuesday"] },
    { name: "jess", rota: ["Monday", "Tuesday"] },
  ];
  expect(areWeCovered(staff, "Wednesday")).toBe(false);
});
