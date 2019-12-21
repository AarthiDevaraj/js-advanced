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

const k = 200; //  initialization is mandatory
console.log(k);

let year;
console.log(year);

year = 2019;
console.log(year);

const person = {
  name: 'Hari'
};

console.log(person);
person.name = 'Prasad'; //  const is a guard against assignment, not against mutation like this
console.log(person);

//  named functions are hoisted too. not applicable for function expressions
function foo() {
  console.log('Hello', i);
}
