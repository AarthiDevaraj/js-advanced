//  It is possible to throw any object, but conventionally,
//  objects of Error class or its subclasses are thrown.
//  For custom error classes, we extend the Error base class
//  and pass the message to baseclass constructor
class LoginFailedError extends Error {
  constructor(message) {
    //  calling the base-class constructor in case of
    //  inheritance is mandatory
    //  super(...) has to be the first line in the
    //  constructor in such cases
    super(message);
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
