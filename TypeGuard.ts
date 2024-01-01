// Define a union type for different data types
type DataType = string | number | boolean;

// Type guard for checking if a value is a string
function isString(value: DataType): value is string {
  return typeof value === "string";
}

// Type guard for checking if a value is a number
function isNumber(value: DataType): value is number {
  return typeof value === "number";
}

// Type guard for checking if a value is a boolean
function isBoolean(value: DataType): value is boolean {
  return typeof value === "boolean";
}

// Function that processes different data types using type guards
function processData(data: DataType): void {
  if (isString(data)) {
    console.log(`Processing string: ${data.toUpperCase()}`);
  } else if (isNumber(data)) {
    console.log(`Processing number: ${data * 2}`);
  } else if (isBoolean(data)) {
    console.log(`Processing boolean: ${data ? "True" : "False"}`);
  } else {
    console.log("Unsupported data type");
  }
}

// Examples
processData("Hello"); // Processing string: HELLO
processData(42); // Processing number: 84
processData(true); // Processing boolean: True
processData({} as any); // Unsupported data type
