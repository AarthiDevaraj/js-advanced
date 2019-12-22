try {
  console.log(x);
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log('ReferenceError Handled', e);
  } else {
    console.log('General Error Handled', e.name);
  }
} finally {
  console.log('Runs anyway');
}
