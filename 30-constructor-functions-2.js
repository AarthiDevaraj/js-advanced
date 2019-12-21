function Book(title, author) {
  this.title = title;
  this.author = author;
}

function Novel(title, author, pages, price) {
  Book.call(this, title, author); //  call the constructor function with the this argument (newly created object)
  this.pages = pages;
  this.price = price;
}

let novelOne = new Novel('Anna Karenina', 'Leo Tolstoy', 1200, 900);
console.log(novelOne);
