export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((num) => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words
    .map((word, i) => {
      return i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((total, person) => total + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (
    menu.filter((item) => item.ingredients.includes(ingredient)).length > 0
  );
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicates = [];
  arr1.forEach((num) => {
    if (arr2.includes(num) && !duplicates.includes(num)) {
      duplicates.push(num);
    }
  });
  return duplicates.sort((a, b) => a - b);
}
