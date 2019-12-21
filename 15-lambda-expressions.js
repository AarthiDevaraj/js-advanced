function foo(val, cb) {
  console.log(`foo executing: ${val}`);
  cb('data from foo');
}

function bar(val, cb) {
  console.log(`bar executing: ${val}`);
  cb('data from bar', 2019);
}

function baz(val, cb) {
  console.log(`baz executing: ${val}`);
  cb();
}

//  Inlining the callback
foo(1000, function(message) {
  console.log('anonymous function callback is called', message);
});

//  lambda expression
foo(1000, message => {
  console.log('lambda expression callback is called', message);
});

//  lambda expression
bar(1000, (message, year) =>
  console.log('lambda expression callback is called', message, year)
);

//  lambda expression
baz(1000, () => {
  console.log('lambda expression callback is called');
});
