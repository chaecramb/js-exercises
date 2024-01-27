export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busCapacity = 40;
  const busesNeeded = Math.ceil(people / busCapacity);
  return busesNeeded;
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((animal) => animal === "sheep").length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}
