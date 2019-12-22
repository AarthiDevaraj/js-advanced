try {
  throw Error('I am throwing the error');
  //   throw 'I am throwing a string';  //  Beware of this practice
} catch (e) {
  //  multiple catch blocks are not allowed.
  //  use instance of operator for structured error handling
  if (e instanceof ReferenceError) {
    console.log('ReferenceError Handled', e.message);
  } else {
    console.log('General Error Handled', e.message);
  }
} finally {
  console.log('Runs anyway');
}
