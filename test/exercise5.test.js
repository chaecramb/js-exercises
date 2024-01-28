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
  it("throw an error when not passed a string", () => {
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
