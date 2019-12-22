class Car {
  constructor() {
    //  instance properties are dynamically created as below:
    //  use of var, let, and const for properties is not allowed
    this.name = 'Default Name';
    this.year = 2019;
  }

  //  method. use of function keyword is not allowed
  getName() {
    //  properties of the instance are accessed by this
    return this.name;
  }

  printName() {
    //  methods of the instance are accessed by this as well
    console.log(this.getName());
  }
}

let car = new Car();
car.printName();
