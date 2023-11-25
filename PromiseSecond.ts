// 1. Creating a class with asynchronous methods
class DataProcessor {
  async fetchData(): Promise<string> {
    // Simulating fetching data from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data has been fetched!");
      }, 2000);
    });
  }

  async processData(data: string): Promise<string> {
    // Simulating processing data
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = `Processed: ${data}`;
        resolve(processedData);
      }, 1500);
    });
  }
}

// 2. Using the class to perform asynchronous tasks
async function performTasks() {
  const dataProcessor = new DataProcessor();

  try {
    const fetchedData = await dataProcessor.fetchData();
    console.log(fetchedData); // Output after 2 seconds: Data has been fetched!

    const processedData = await dataProcessor.processData(fetchedData);
    console.log(processedData); // Output after additional 1.5 seconds: Processed: Data has been fetched!
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// 3. Calling the function to perform tasks
performTasks();
