function foo() {
  console.log('foo access', val); //  val is already hoisted and is undefined at this stage

  if (true) {
    var val = 2019; // hoisted to the function scope!
    console.log('inner block access', val);
  }
}

foo();
