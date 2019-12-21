let cities = [
  'Bengaluru',
  'Mysuru',
  'Chennai',
  'Mumbai',
  'Kolkata',
  'Delhi',
  'Madurai'
];

//  Access by index
console.log(cities[1]); //  Mysuru

//  Selection by slice
let sliced_array = cities.slice(1, 4); //  start and end indexes. returns a new array. original array is unaltered.

console.log(sliced_array);
