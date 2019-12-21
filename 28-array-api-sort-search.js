let cities = [
  'Bengaluru',
  'Mysuru',
  'Chennai',
  'Mumbai',
  'Kolkata',
  'Delhi',
  'Madurai'
];

//  sort

cities.sort(); //  original array is altered.

console.log(cities);

//  search index with indexOf
let index = cities.indexOf('Mysuru');
console.log(`Index of Mysuru is: ${index}`);
console.log(`Index of Colombo is: ${cities.indexOf('Colombo')}`); //  -1 in case not found

//  Further reading references:
//  findIndex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//  lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
//  reverse: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
