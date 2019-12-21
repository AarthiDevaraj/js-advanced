//  var i; // hoisting
// function foo() {
//     console.log('Hello', i);
// }

foo();
console.log(i);
var i = 100; // i = 100; // assignment
console.log(i);

let j = 20; // no hoisting
console.log(j);

const k = 200;
console.log(k);

let year;
console.log(year);

year = 2019;
console.log(year);

const person = {
  name: 'Hari'
};

console.log(person);
person.name = 'Prasad';
console.log(person);

function foo() {
  console.log('Hello', i);
}
