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

//  searching can be done in 2 ways: using search and indexOf
//  indexOf
let line = 'the name that can be named is not the eternal name';
console.log(line.indexOf('name')); //  index of the first occurrence of the search string
console.log(line.indexOf('name', 5)); //  starting position for search. default is 0 or beginning

let lineTwo = 'the NaMe that can be Named is not the eternal name';
// console.log(line.indexOf());

//  search takes a regular expression
//  https://en.wikipedia.org/wiki/Perl_Compatible_Regular_Expressions
//  https://www.regexpal.com/
//  Comparison: https://en.wikipedia.org/wiki/Comparison_of_regular-expression_engines
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
console.log(line.search('name'));
console.log(lineTwo.search(/name/i));

//  length
console.log(line.length);

//  concatenation
console.log(line.concat('concatenation by concat api'));
console.log(line + 'concatenation by + operator overload for string');

//  substring / selection
console.log(line.slice(5, 12));
console.log(line.substring(5, 12));

//  substring and slice are almost identical but they differ how they handle the negative indexes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
console.log(line.substr(4, 4)); //  it is start index and 'length' (not ending index!)

//  replace
//  Beware, the search string is a regular expression
//  By default, the first match is replaced
//  For all replacement, use g flag with regex

//  More on JavaScript regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
let replacedString = line.replace(/name/g, 'NAME');
console.log(replacedString);
