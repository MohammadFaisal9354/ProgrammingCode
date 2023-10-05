class Animal {
  constructor(public name: string) {}
}

class Flying {
  constructor(public name: string) {} // Include name property in Flying
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

class Swimmer {
  constructor(public name: string) {} // Include name property in Swimmer
  swim() {
    console.log(`${this.name} is swimming.`);
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }
}

interface Bird extends Flying, Swimmer {}

const bird = new Bird("Eagle");
bird.fly(); // Eagle is flying.
bird.swim(); // Eagle is swimming.
