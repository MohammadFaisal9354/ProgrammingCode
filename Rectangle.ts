class Rectangle {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
const area = rectangle.calculateArea();

console.log(`The area of the rectangle is: ${area}`);
