// PromiseExample.js

// Creating a Promise
function waitFor(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${delay} milliseconds.`);
    }, delay);
  });
}

// Using the Promise
console.log("Start of the program");

// Call the waitFor function and wait for the Promise to resolve
waitFor(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("End of the program");
