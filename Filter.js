// Example 1: Filtering even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Filtering strings with specific length
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

const filteredFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});

console.log(filteredFruits); // Output: ["banana", "orange"]

// Example 3: Filtering objects based on a property
const products = [
  { name: 'Shirt', price: 20 },
  { name: 'Pants', price: 30 },
  { name: 'Shoes', price: 50 },
  { name: 'Hat', price: 10 },
];

const affordableProducts = products.filter((product) => {
  return product.price < 40;
});

console.log(affordableProducts);
// Output: [
//   { name: 'Shirt', price: 20 },
//   { name: 'Pants', price: 30 },
//   { name: 'Hat', price: 10 }
// ]
