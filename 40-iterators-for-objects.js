//  for key in object

let book = {
  title: 'C++',
  pages: 1200,
  price: 900
};

//  for in iterator is for keys in the object
//  using the key we can get the value
for (const key in book) {
  console.log(book[key]);
}

console.log('-----------------------');

let numbers = [0, 1, 8, 9, 78];

//  simple iterator over the iterable collections
for (const i of numbers) {
  console.log(i);
}

console.log('-----------------------');

//  array.forEach offers more capabilities
//  i here is the index
numbers.forEach((n, i) => console.log(i, n));

console.log('-----------------------');
//  Special case of array index assignment
numbers[100] = 'Hi';

//  for in will not iterate over undefined
for (const n in numbers) {
  console.log(n);
}
