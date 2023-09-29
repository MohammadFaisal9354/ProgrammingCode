// Define a function that returns a promise
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from an async operation";
      resolve(data); // Resolve the promise with the data
    }, 2000); // Simulate an async operation
  });
}

// Define two functions that return promises
function step1(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 1000);
  });
}

function step2(resultFromStep1: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Step 2 received ${resultFromStep1}`);
    }, 1500);
  });
}

// Use promises and chaining
step1()
  .then((result1) => {
    return step2(result1);
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Use async/await
async function fetchDataWithAsync(): Promise<void> {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
    // Perform further actions with the data
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

fetchDataWithAsync();
