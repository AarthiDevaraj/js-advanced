let citiesIndia = [
  'Bengaluru',
  'Mysuru',
  'Chennai',
  'Mumbai',
  'Kolkata',
  'Delhi',
  'Madurai'
];

let citiesWorld = [
  'New York',
  'London',
  'Madrid',
  'Berlin',
  'Stockholm',
  'Chicago',
  'Tokyo'
];

//  Concatenation
let citiesAll = citiesIndia.concat(citiesWorld); //  citiesIndia is unaltered

//  join will create a string with separator specified
let citiesString = citiesAll.join('; ');

console.log(citiesString);

//  concatenation using spread operator. ES6 feature.
let citiesSpreadOperator = [...citiesIndia, ...citiesWorld];
console.log(citiesSpreadOperator);

//  Special case: array clone
//  This is important because arrays are reference types
//  Therefore the = operator can only copy the reference

//  This can be done in 2 ways

//  Using slice()

let citiesCloneSlice = citiesIndia.slice(); //  without any argument
console.log(citiesCloneSlice === citiesIndia); //  different objects

//  Using spread operator. ES6
let citiesCloneSpread = [...citiesIndia];
console.log(citiesCloneSpread === citiesIndia); //  different objects
