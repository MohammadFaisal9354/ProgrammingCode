// Define a generic function to swap values
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

// Example usage with different types
const swappedNumbers = swap(1, 2);
const swappedStrings = swap("hello", "world");

console.log(swappedNumbers); // Output: [2, 1]
console.log(swappedStrings); // Output: ['world', 'hello']
