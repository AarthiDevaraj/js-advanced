function foo(val, cb) {
  console.log(`foo executing: ${val}`);
  cb('data from foo');
}

function fooInJavaWay(val, cb) {
  console.log(`foo executing: ${val}`);

  //  Ensure cb is a function
  //  using typeof

  if (typeof cb === 'function') {
    cb('data from foo');
  } else {
    console.log('cb is not a function');
  }

  //  using instanceof
  //   if (cb instanceof Function) {
  //     cb('data from foo');
  //   } else {
  //     console.log('cb is not a function');
  //   }
}

function myCallback(message) {
  console.log(`callback executing: ${message}`);
}

foo(1001, myCallback);
// fooInJavaWay(1001, 100);
