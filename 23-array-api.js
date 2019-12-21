let numbers = [0, 2, 4, 5, 6, 7, 8, 8];

let letters = Array('A', 'B', 'C', 100, true, new Date());

console.log(numbers);
console.log(letters);

let arr_one = [];
console.log(typeof arr_one);
arr_one.push(100);
arr_one.push(200);
arr_one.push(201);
arr_one.push(202);
arr_one.push(203);
console.log(arr_one);
arr_one.pop();
console.log(arr_one);
arr_one.shift();
console.log(arr_one);
arr_one.unshift(5);
console.log(arr_one);

arr_two = arr_one;

arr_one[2] = 'Hello';

console.log(arr_two);

arr_one['another'] = 'There!';
console.log(arr_two['another']);

// arr_one[1000] = 'Hii';
// arr_one[500] = '500!!!';

console.log(arr_two.length);

arr_one.forEach(el => {
  console.log(`Iterator: ${el}`);
});

let marks = [90, 81, 75, 56, 98];

let moreThan80 = marks.filter(m => m >= 80);

console.log(moreThan80);

let mapMarks = marks.map(m => {
  if (m % 2 === 0) {
    return m * m;
  } else {
    return m;
  }
});
console.log(mapMarks);

console.log(marks.slice(0, 2));

console.log(marks);
console.log(marks.splice(2, 1));
console.log(marks);
console.log(marks.splice(2, 0, 75));
console.log(marks);
