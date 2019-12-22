class Car {
  constructor() {
    this.name = 'Default Name'; //  instance properties
    this.year = 2019;
  }

  getName() {
    return this.name;
  }

  printName() {
    console.log(this.getName());
  }
}

let car = new Car();
car.printName();
