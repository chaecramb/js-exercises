export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let smallNums = [];
  nums.forEach((num) => {
    if (num < 1) smallNums.push(num);
  });
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginningWith = [];
  names.forEach((name) => {
    if (name.charAt(0) === char) namesBeginningWith.push(name);
  });
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach((word) => {
    if (word.slice(0, 3) === "to ") verbs.push(word);
  });
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  nums.forEach((num) => {
    if (Number.isInteger(num)) integers.push(num);
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    let squareRoot = Math.sqrt(nums[i]);
    squareRoots.push(Math.round(squareRoot * 100) / 100);
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentencesContaining = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      sentencesContaining.push(sentences[i]);
    }
  }
  return sentencesContaining;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    let longestSide = Math.max(
      triangles[i][0],
      triangles[i][1],
      triangles[i][2]
    );
    longestSides.push(longestSide);
  }
  return longestSides;
}
