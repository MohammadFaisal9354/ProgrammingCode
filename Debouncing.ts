type DebouncedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): DebouncedFunction<T> {
  let timeoutId: any;

  return function debounced(...args: Parameters<T>): void {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Example usage:

function handleInput(value: string): void {
  console.log(`Input received: ${value}`);
  // Simulate an expensive operation here
}

// Debounce the handleInput function with a delay of 500 milliseconds
const debouncedHandleInput = debounce(handleInput, 500);

// Simulating user typing
debouncedHandleInput("T");
debouncedHandleInput("Ty");
debouncedHandleInput("Typ");
debouncedHandleInput("Type");
debouncedHandleInput("Typescript"); // Only this call will trigger the actual handleInput after 500 milliseconds
