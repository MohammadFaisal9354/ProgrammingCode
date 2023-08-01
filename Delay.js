// AdvancedConcepts.js

// Higher-order Function: A function that takes another function as an argument
function delayExecution(func, delay) {
  return function (...args) {
    setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Closures: A closure that captures a value and returns a function that uses it
function createCounter(initialValue) {
  let count = initialValue;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

// Asynchronous Operation with Promises
function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Usage of Advanced Concepts
const delayedGreeting = delayExecution((name) => {
  console.log(`Hello, ${name}!`);
}, 2000);

delayedGreeting("John");

const counter = createCounter(5);
counter(); // Output: Current count: 6
counter(); // Output: Current count: 7

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetchDataFromAPI(apiUrl)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
