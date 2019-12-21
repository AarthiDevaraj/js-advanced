let cities = [
  'Bengaluru',
  'Mysuru',
  'Chennai',
  'Mumbai',
  'Kolkata',
  'Delhi',
  'Madurai'
];

//  Manual iterator
for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}

//  Iterator api
//  callback function is called for every element in the array
cities.forEach(el => console.log(el));

//  Special iterators
//  map is used to create a new array by iteration
//  decoration is one obvious use

citiesUpperCase = cities.map(el => el.toUpperCase());

//  filter is used to create a new array by evaluating a
//  predicate against every element of the array

citiesLong = cities.filter(el => el.length > 6);
