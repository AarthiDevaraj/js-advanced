function foo(val, cb) {
  console.log(`foo executing: ${val}`);
  cb('data from foo');
}

function myCallback(message) {
  console.log(`callback executing: ${message}`);
}

foo(1001, myCallback);
