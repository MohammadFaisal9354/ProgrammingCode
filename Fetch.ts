// 1. Async/Await
async function fetchData(): Promise<string> {
  // Simulating fetching data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data has been fetched!");
    }, 2000);
  });
}

async function processData(): Promise<void> {
  const data = await fetchData();
  console.log(data);
}

processData(); // Output: Data has been fetched!

// 2. Conditional Types
type CheckType<T> = T extends string ? "It's a string!" : "It's not a string!";

const resultString: CheckType<string> = "It's a string!";
const resultNumber: CheckType<number> = "It's not a string!"; // Compile error

// 3. Template Literal Types
type Greeting<T extends string> = `Hello, ${T}!`;

const greeting: Greeting<"World"> = "Hello, World!";
// const invalidGreeting: Greeting<number> = "Compile error"; // Compile error
