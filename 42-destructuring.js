let stateArray = [1, 45, 85, 74];

//  four variables created and mapped to the values of positional items of the array
let [sales, projected, hyper, average] = stateArray;

console.log(sales, average);

let a = 100;
let b = 150;

//  Useful in swapping the variables
[a, b] = [b, a];

console.log(a, b);

//  goes by the position and rest are ignored
let [x, y] = stateArray;

console.log(x, y);

//  default value can be specified. applied only if collection doesn't provide one.
let [one, another = 'Default'] = [100];
console.log(another);
