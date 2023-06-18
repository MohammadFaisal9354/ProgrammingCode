// Example 1: Summing an array of numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// Example 2: Flattening an array of arrays
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Counting occurrences of items in an array
const fruits = ["apple", "banana", "orange", "apple", "orange", "apple"];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(fruitCount); // Output: { apple: 3, banana: 1, orange: 2 }
