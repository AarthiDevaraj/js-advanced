//  case conversion

const originalString = 'hello there!';

console.log(originalString.toUpperCase());
console.log(originalString.toLowerCase());
console.log(originalString); //  strings are immutable

//  please take a look at toLocaleLowerCase and toLocaleUpperCase
//  these apis convert cases for the language (unicode, not available in older JS implementations)
//  Russian has lower and upper cases: https://en.wikipedia.org/wiki/Russian_alphabet

//  whitespace stripping
let paddedString = '     hello      ';
console.log(paddedString.trim());

//  splitting of string
let longValue = 'India;UK;USA;China;Australia;Sweden';
console.log(longValue.split(';'));
console.log(longValue.split(';', 1)); //  limit the split, if not provided, it is unlimited and will split till the end
