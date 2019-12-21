let cities = [
  'Bengaluru',
  'Mysuru',
  'Chennai',
  'Mumbai',
  'Kolkata',
  'Delhi',
  'Madurai'
];

//  Add at the end
cities.push('Hubballi'); // alters the original array

//  Add at the beginning. Performance impact because of right shifting. unshift isn't intuitive for adding.
cities.unshift('Pune'); // alters the original array

//  Delete at the end
cities.pop(); // alters the original array. returns the popped item

//  Delete at the beginning. Performance impact because of left shifting. shift isn't intuitive removing.
cities.shift(); // alters the original array. returns the shifted item

//  To insert at a specific index or to remove at specific index,
//  splice api is used. splice(index, count, ...items)
//  for deletion, count is >0, it is =0 for insertion.
//  for deletion, items is left blank.

//  Insert at a specific index
cities.splice(3, 0, 'Tokyo', 'Mexico'); //  make sure count (2nd argument) is 0

//  Delete at a specific index
cities.splice(6, 2); //  at 6th index (7th position) remove 2 items

//  Beware of this odd behaviour of JavaScript to add items to the array
//  It is possible to add an element at random index

emptyArray = [];
emptyArray[1000] = 'How is it?'; //  999 empty (undefined) elements!

//  Since arrays are objects, we can set properties
//  These are object properties, and are not array elements
//  Such properties cannot be accessed by index
//  They should be accessed by keys

//  Generally, it is recommended to add elements to the array using indexes

emptyArray['keyHere'] = 'Value Here!'; //  not an element of the array, but a property on the object
