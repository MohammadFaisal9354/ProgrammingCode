// 1. Creating a Promise
const taskOnePromise: Promise<string> = new Promise((resolve, reject) => {
  // Simulating an asynchronous task
  setTimeout(() => {
    const result = "Task One is done!";
    resolve(result);
  }, 2000);
});

// 2. Ensure taskOne is done before starting taskTwo
const taskTwoPromise: Promise<string> = taskOnePromise.then(
  (resultFromTaskOne) => {
    // Simulating another asynchronous task that depends on the result of taskOne
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = `${resultFromTaskOne} Now, Task Two is done!`;
        resolve(result);
      }, 2000);
    });
  }
);

// 3. Consuming the promises
taskOnePromise.then((result) => {
  console.log(result); // Output after 2 seconds: Task One is done!
});

taskTwoPromise.then((result) => {
  console.log(result); // Output after additional 2 seconds: Task One is done! Now, Task Two is done!
});
