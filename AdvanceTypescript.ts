// Define a TypeScript interface for a generic data structure
interface DataStructure<T> {
  data: T[];
  add: (item: T) => void;
  remove: (item: T) => void;
  find: (predicate: (item: T) => boolean) => T | undefined;
}

// Implement a generic class using the interface
class GenericDataStructure<T> implements DataStructure<T> {
  private items: T[] = [];

  constructor() {
    this.items = [];
  }

  data: T[] = this.items;

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

// Create instances of the generic data structure
const stringData: DataStructure<string> = new GenericDataStructure<string>();
stringData.add("Apple");
stringData.add("Banana");
stringData.add("Cherry");
stringData.remove("Banana");
console.log(stringData.find((item) => item === "Cherry")); // Output: "Cherry"

const numberData: DataStructure<number> = new GenericDataStructure<number>();
numberData.add(1);
numberData.add(2);
numberData.add(3);
numberData.remove(2);
console.log(numberData.find((item) => item === 3)); // Output: 3

// Define a mapped type to convert an object's keys to uppercase
type UppercaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

// Example object
const person = {
  name: "John",
  age: 30,
};

// Use the mapped type to create a new object with uppercase keys
const personWithUppercaseKeys: UppercaseKeys<typeof person> = {
  NAME: "John",
  AGE: 30,
};

// Create a function with a generic constraint
function lengthOfArray<T extends Array<any>>(arr: T): number {
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];

console.log(lengthOfArray(array1)); // Output: 3
console.log(lengthOfArray(array2)); // Output: 3

// Define a tuple type with fixed length and types
type Point2D = [number, number];

// Function to calculate the distance between two 2D points
function calculateDistance(point1: Point2D, point2: Point2D): number {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const pointA: Point2D = [0, 0];
const pointB: Point2D = [3, 4];

console.log(calculateDistance(pointA, pointB)); // Output: 5

// Define a type for a function that can handle errors
type ErrorHandler = (error: Error) => void;

// Create a function that throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// Handle errors using the error handler function
const handleError: ErrorHandler = (error) => {
  console.error(`Error: ${error.message}`);
};

try {
  throwError("Something went wrong!");
} catch (error) {
  handleError(error);
}
