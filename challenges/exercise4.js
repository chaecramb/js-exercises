export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexOfN = nums.indexOf(n);
  // Assign next number, or null if the index plus 1 is out of range
  const nextNumber = nums[indexOfN + 1] || null;
  // Return nextNumber or null if n was not found
  return indexOfN != -1 ? nextNumber : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return str.split("").reduce(
    (result, n) => {
      if (n === "1") result[1]++;
      if (n === "0") result[0]++;
      return result;
    },
    { 1: 0, 0: 0 }
  );
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const recursiveSum = (arr) => {
    return arr.reduce((total, n) => {
      if (Array.isArray(n)) {
        return total + recursiveSum(n);
      }
      return total + n;
    }, 0);
  };
  return recursiveSum(arrs);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length === 1) return arr;
  const first = arr.shift();
  const last = arr.pop();
  return [last, ...arr, first];
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
