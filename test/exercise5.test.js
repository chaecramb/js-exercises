import {
  sumMultiples,
  createMatrix,
  areWeCovered,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
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

describe("isValidDNA", () => {
  test("throw an error when not passed a string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA(1);
    }).toThrow("str is required");
  });

  test("return false if string is empty", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("return false if string is not valid DNA", () => {
    expect(isValidDNA("hi there")).toBe(false);
    expect(isValidDNA("TAGOCA")).toBe(false);
    expect(isValidDNA("AGT1C")).toBe(false);
    expect(isValidDNA("AGT-C")).toBe(false);
    expect(isValidDNA("AGT_C")).toBe(false);
    expect(isValidDNA("AGT.C")).toBe(false);
  });

  test("return true if string is valid DNA", () => {
    expect(isValidDNA("TAGCA")).toBe(true);
    expect(isValidDNA("AGTC")).toBe(true);
    expect(isValidDNA("AGAATCCGGTC")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("throws error if no str passed", () => {
    expect(() => getComplementaryDNA()).toThrow("str is required");
    expect(() => getComplementaryDNA(123)).toThrow("str is required");
  });

  test("throws error if invalid str is passed", () => {
    expect(() => getComplementaryDNA("XYZ")).toThrow("str is not valid DNA");
  });

  test("returns expected complementary pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CCGG")).toBe("GGCC");
  });
});

describe("isItPrime", () => {
  test("throws error if no argument passed", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });

  test("returns true for prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
  });

  test("returns false for non-prime numbers", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });

  test("works with large inputs", () => {
    expect(isItPrime(13)).toBe(true);
    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(997)).toBe(true);
    expect(isItPrime(10007)).toBe(true);

    expect(isItPrime(15)).toBe(false);
    expect(isItPrime(21)).toBe(false);
    expect(isItPrime(1001)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("throws if n not provided", () => {
    expect(() => createMatrix()).toThrow("n is required");
  });

  test("throws if fill not provided", () => {
    expect(() => createMatrix(3)).toThrow("fill is required");
  });

  test("returns a matrix of 1 * 1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });

  test("returns expected matrix", () => {
    expect(createMatrix(3, "x")).toEqual([
      ["x", "x", "x"],
      ["x", "x", "x"],
      ["x", "x", "x"],
    ]);

    expect(createMatrix(3, 123)).toEqual([
      [123, 123, 123],
      [123, 123, 123],
      [123, 123, 123],
    ]);

    expect(createMatrix(5, "abcd")).toEqual([
      ["abcd", "abcd", "abcd", "abcd", "abcd"],
      ["abcd", "abcd", "abcd", "abcd", "abcd"],
      ["abcd", "abcd", "abcd", "abcd", "abcd"],
      ["abcd", "abcd", "abcd", "abcd", "abcd"],
      ["abcd", "abcd", "abcd", "abcd", "abcd"],
    ]);
  });

  test("returns empty matrix when n is 0", () => {
    const result = createMatrix(0, "bar");
    expect(result).toEqual([]);
  });
});

describe("areWeCovered", () => {
  test("throws if staff not provided", () => {
    expect(() => areWeCovered()).toThrow("staff is required");
  });

  test("throws if day not provided", () => {
    const staff = [];
    expect(() => areWeCovered(staff)).toThrow("day is required");
  });

  test("returns false if there are staff but < 3 scheduled to work", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Tuesday"] },
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns true if enough staff for day", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Tuesday"] },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });

  test("returns true for exact minimum staff needed", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });
});
