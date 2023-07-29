// debounce.ts

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function doExpensiveOperation(value: string) {
  console.log("Expensive operation with value:", value);
}

const debouncedExpensiveOperation = debounce(doExpensiveOperation, 500);

// Calling the debounced function multiple times within 500ms
debouncedExpensiveOperation("First call");
debouncedExpensiveOperation("Second call");
debouncedExpensiveOperation("Third call");

// Only one actual call to the expensive operation will be made after 500ms
