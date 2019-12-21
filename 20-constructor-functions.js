function Laptop(serial, year, price) {
  this.serialNumber = serial;
  this.yearOfManufacture = year;
  this.price = price;
}

let laptop1 = new Laptop('ABCD123', 2018, 56000);

console.log(laptop1);
