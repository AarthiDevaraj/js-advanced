//  default parameters are introduced in ES6. older browsers may not support it.

function http_request(url = 'localhost', method = 'POST', body = {}) {
  console.log(`url: ${url}, method: ${method}, body: `, body);
}

// Rest parameter may not have a default initializer
http_request();
