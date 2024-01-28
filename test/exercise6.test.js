import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("throws error if no argument passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("returns correct sum for positive integers", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(456)).toBe(15);
  });

  test("returns correct sum for negative integers", () => {
    expect(sumDigits(-123)).toBe(6);
    expect(sumDigits(-456)).toBe(15);
  });

  test("returns 0 for 0", () => {
    expect(sumDigits(0)).toBe(0);
  });
});
