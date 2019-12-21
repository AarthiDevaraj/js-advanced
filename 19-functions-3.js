function foo() {
  //...
  console.log('Named function', this);
}

let functionExpression = function() {
  //...
  console.log('Expression', this);
};

let lambdaExpression = () => {
  console.log('Lambda', this);
};

// book = {
//   name: 'The tale of two cities'
// };

// book.func = lambdaExpression;

// book.func();

foo();
functionExpression();
lambdaExpression();
