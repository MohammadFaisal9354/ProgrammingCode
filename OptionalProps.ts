// 1. Generics
function identityy<T>(arg: T): T {
  return arg;
}

// Example usage of generics
let resultString_: string = identityy("Hello, TypeScript!");
let resultNumber_: number = identityy(42);

console.log(resultString_); // Output: Hello, TypeScript!
console.log(resultNumber_); // Output: 42

// 2. Intersection Types
interface Car {
  brand: string;
  speed: number;
}

interface Electric {
  batteryLife: number;
}

// Combining two interfaces into one
type ElectricCar = Car & Electric;

const tesla_: ElectricCar = {
  brand: "Tesla",
  speed: 200,
  batteryLife: 300,
};

console.log(tesla_); // Output: { brand: 'Tesla', speed: 200, batteryLife: 300 }

// 3. Mapped Types
type OptionalProps<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

// Creating a type with all properties optional
type PartialUser = OptionalProps<User>;

const partial_User: PartialUser = {
  id: 1,
};

console.log(partial_User); // Output: { id: 1 }
