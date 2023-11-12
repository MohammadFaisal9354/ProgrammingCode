// Basic types
type Person = {
  name: string;
  age: number;
};

// Readonly utility type
type ReadonlyPerson = Readonly<Person>;

// Partial utility type
type PartialPerson = Partial<Person>;

// Pick utility type
type PickPerson = Pick<Person, "name">;

// Omit utility type
type OmitPerson = Omit<Person, "age">;

// Conditional types
type AgeOrName<T> = T extends { age: number } ? "Has Age" : "No Age";

// Example usage
const person: Person = { name: "John", age: 25 };

const readonlyPerson: ReadonlyPerson = person;
// readonlyPerson.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.

const partialPerson: PartialPerson = { name: "Alice" };
// partialPerson.age = 28; // Okay: 'age' is optional.

const pickPerson: PickPerson = { name: "Bob" };
// pickPerson.age = 22; // Error: Object literal may only specify known properties.

const omitPerson: OmitPerson = { name: "Eve" };
// omitPerson.age = 26; // Okay: 'age' is omitted.

const ageStatus: AgeOrName<typeof person> = person.age ? "Has Age" : "Has Age";

if (ageStatus === "Has Age") {
  // Handle the case where age is present
  console.log("Age is present");
} else {
  // Handle the case where age is not present
  console.log("Age is not present");
}
