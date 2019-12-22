'use strict';

i = 100; //  ReferenceError i is not defined

function foo() {
  console.log(this); //  undefined in the strict mode. global object in the normal mode.
}

//  Please refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

//  What doesn't work in strict mode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
