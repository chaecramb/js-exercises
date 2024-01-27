export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => word.startsWith("to "));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  nums.forEach((num) => {
    let squareRoot = Math.sqrt(num);
    squareRoots.push(Math.round(squareRoot * 100) / 100);
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentencesContaining = [];
  sentences.forEach((sentence) => {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      sentencesContaining.push(sentence);
    }
  });
  return sentencesContaining;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach((triangle) => {
    let longestSide = Math.max(triangle[0], triangle[1], triangle[2]);
    longestSides.push(longestSide);
  });
  return longestSides;
}
