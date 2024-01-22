class CustomSet<T> {
  private items: Map<T, boolean>;

  constructor() {
    // Initialize an empty map to store set items
    this.items = new Map<T, boolean>();
  }

  // Add element to the set
  add(element: T): void {
    // Time complexity: O(1)
    this.items.set(element, true);
  }

  // Remove element from the set
  delete(element: T): boolean {
    // Time complexity: O(1)
    return this.items.delete(element);
  }

  // Check if an element is in the set
  has(element: T): boolean {
    // Time complexity: O(1)
    return this.items.has(element);
  }

  // Get the size of the set
  size(): number {
    // Time complexity: O(1)
    return this.items.size;
  }

  // Get all elements of the set
  values(): T[] {
    // Time complexity: O(n), where n is the number of elements in the set
    return Array.from(this.items.keys());
  }

  // Perform a union operation with another set
  union(otherSet: CustomSet<T>): CustomSet<T> {
    // Time complexity: O(m + n), where m and n are the sizes of the two sets
    const unionSet = new CustomSet<T>();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  // Perform an intersection operation with another set
  intersection(otherSet: CustomSet<T>): CustomSet<T> {
    // Time complexity: O(min(m, n)), where m and n are the sizes of the two sets
    const intersectionSet = new CustomSet<T>();
    this.values().forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  // Perform a difference operation with another set
  difference(otherSet: CustomSet<T>): CustomSet<T> {
    // Time complexity: O(m), where m is the size of the set
    const differenceSet = new CustomSet<T>();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
}

// Example usage:
const set1 = new CustomSet<number>();
set1.add(1);
set1.add(2);
set1.add(3);

const set2 = new CustomSet<number>();
set2.add(2);
set2.add(3);
set2.add(4);

const unionSet = set1.union(set2);
const intersectionSet = set1.intersection(set2);
const differenceSet = set1.difference(set2);

console.log("Set 1:", set1.values());
console.log("Set 2:", set2.values());
console.log("Union:", unionSet.values());
console.log("Intersection:", intersectionSet.values());
console.log("Difference:", differenceSet.values());
