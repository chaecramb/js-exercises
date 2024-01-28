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

describe("createRange", () => {
  test("throws if start not provided", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });

  test("throws if end not provided", () => {
    expect(() => {
      createRange(5);
    }).toThrow("end is required");
  });

  test("returns range with default step of 1", () => {
    expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  test("returns range with provided step", () => {
    expect(createRange(10, 25, 5)).toEqual([10, 15, 20, 25]);
  });

  test("return array with single element if start and end the same", () => {
    expect(createRange(5, 5)).toEqual([5]);
  });
});
