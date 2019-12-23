class EmailNotValidError extends Error {
  constructor(message) {
    super(message);
  }
}

class Email {
  constructor(email) {
    this.email = email;
  }

  set email(value) {
    //    https://emailregex.com/
    let emailRegex = RegExp(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
    if (emailRegex.test(value)) {
      this._email = value;
    } else {
      throw new EmailNotValidError(`Email (${value}) is not valid`);
    }
  }

  get email() {
    return this._email;
  }

  get sections() {
    let parts = this._email.split('@');
    let domain = parts[1].split('.', 1)[0];
    let tld = parts[1].slice(domain.length);

    return [parts[0], domain, tld];
  }
}

let emailOne = new Email('person@domain.com');
console.log(emailOne.email);
console.log(emailOne.sections);

let emailTwo = new Email('person.lastname@domain.co.uk');
console.log(emailTwo.email);
console.log(emailTwo.sections);

try {
  let emailInvalid = new Email('person#domain');
  console.log(emailTwo.email);
  console.log(emailTwo.sections);
} catch (e) {
  if (e instanceof EmailNotValidError) {
    console.error('Email not valid', e.message);
  } else {
    console.error('General error', e.message);
  }
}
