//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let person = {
  id: 10,
  first_name: 'Mella',
  last_name: 'Yoxall',
  email: 'myoxall9@wp.com',
  gender: 'Female',
  ip_address: '128.221.192.193'
};

let { id, ip_address } = person;

console.log(id, ip_address);

let { defaultProperty = new Date() } = person;

console.log(defaultProperty);

//  aliasing variable
//  variable fname is created and gets value from first_name
//  should provide the default value
let { first_name: fname = 'Name' } = person;

console.log(fname);
