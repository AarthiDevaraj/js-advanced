class LoginFailedError extends Error {
  constructor(message) {
    super(message); //  compulsory
  }
}

try {
  throw new LoginFailedError('Login failed');
  //   throw 'I am throwing a string';  //  Beware of this practice
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log('ReferenceError Handled', e.message);
  } else if (e instanceof LoginFailedError) {
    console.log('LoginFailed Handled', e.message);
  } else {
    console.log('General Error Handled', e.message);
  }
} finally {
  console.log('Runs anyway');
}
