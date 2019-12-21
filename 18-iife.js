// IIFE: Immediately Invoked Function Expression

(function foo() {
  console.log('foo iife executing');
})();

(function() {
  console.log('anonymous iife executing');
})();

//  ES6 feature
(() => {
  console.log('lambda iife executing');
})();
