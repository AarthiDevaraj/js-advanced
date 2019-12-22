'use strict'; //  this is a directive

//  These things do not work in strict mode (work in normal mode, nonetheless)

//  some keywords are not allowed as identifiers:
//  public, private, protected,
//  package, interface, implements,
//  static, yield

// i = 100; //  ReferenceError i is not defined

// function foo() {
//   console.log(this); //  undefined in the strict mode. global object in the normal mode.
// }

// let book;
// delete book; //  cannot delete variables and functions

// let octalNumber = 080; //  octal number literals are not allowed

// function foo() {
//   arguments = 100; // assignment to argument data-structure is not allowed
// }

//  Please refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

//  What doesn't work in strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

