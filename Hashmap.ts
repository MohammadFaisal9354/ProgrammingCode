// Create a new Map
const myMap = new Map();

// Set key-value pairs
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Get the value for a specific key
const valueForKey2 = myMap.get("key2");
console.log("Value for key2:", valueForKey2);

// Check if a key exists in the Map
const hasKey = myMap.has("key3");
console.log("Does the map have key3?", hasKey);

// Delete a key-value pair
myMap.delete("key1");

// Iterate through the keys and values
console.log("Iterating through keys and values:");
for (const [key, value] of myMap) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Get all keys
const keys = Array.from(myMap.keys());
console.log("All keys:", keys);

// Get all values
const values = Array.from(myMap.values());
console.log("All values:", values);

// Get entries (key-value pairs) as an array
const entries = Array.from(myMap.entries());
console.log("All entries:", entries);

// Clear the Map
myMap.clear();
console.log("Map after clear:", myMap);
