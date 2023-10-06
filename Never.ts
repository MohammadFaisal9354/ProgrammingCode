function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}

// Usage of throwError
try {
  throwError("This will throw an error.");
} catch (error) {
  console.error(error);
}

// Usage of infiniteLoop
// infiniteLoop(); // This will result in an infinite loop
