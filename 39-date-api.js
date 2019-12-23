//  Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//  Epoch 1 Jan 1970 0:0:0
//  stored as milliseconds from the epoch

let today = new Date();
console.log(today);

//  string methods
//  ISO Date format: https://en.wikipedia.org/wiki/ISO_8601

console.log(today.toISOString());
console.log(today.toDateString());

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
console.log(today.toLocaleDateString('de-DE', options));

//  getters
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getFullYear());

//  setters: mutate the original object!
today.setFullYear(1999);
console.log(today);

//  construction
//  year is exact, month and date will be +1
let dateOne = new Date(89, 7, 15); //  2 digit year will be for 19XX. Not advisable. Always use 4 digit years
console.log(dateOne);

//  from iso date format
let dateTwo = new Date('1989-07-15');
console.log(dateTwo);
