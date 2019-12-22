try {
  throw Error('I am throwing the error');
  //   throw 'I am throwing a string';  //  Beware of this practice
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log('ReferenceError Handled', e.message);
  } else {
    console.log('General Error Handled', e.message);
  }
} finally {
  console.log('Runs anyway');
}
