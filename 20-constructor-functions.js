function Laptop(serial, year, price) {
  // constructor function
  // typically written in PascalCase
  // this data structure is provided by the runtime
  // when used with new keyword, this here becomes the empty object
  // we then assign the properties to that empty object
  // at the end, this empty object, now filled with properties is implicitly returned
  this.serialNumber = serial;
  this.yearOfManufacture = year;
  this.price = price;
}

let laptop1 = new Laptop('ABCD123', 2018, 56000);

console.log(laptop1);
