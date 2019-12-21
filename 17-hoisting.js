function foo() {
  console.log('foo access', val);

  if (true) {
    var val = 2019;
    console.log('inner block access', val);
  }
}

foo();
