class Book {
  constructor(title, author, price, pages) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.pages = pages;
  }
}

class BookStore {
  constructor(name) {
    this.books = [];
    this._name = name; //  there is no private. underscore is used to denote implementation
  }

  //  getter is a method inside the scope, but works like a read-only property outside
  //  accessed like x = instance.name; always appears at the rhs of the assignment
  //  getter should not take any argument, but should return
  //  calling getter instance.name() is illegal
  get name() {
    return this._name.toUpperCase();
  }

  //  setter is a method inside but works like a write-only property outside
  //  setter appears at the lhs of the assignment
  //  calling setter instance.name(value) is illegal
  //  useful if validation needs to be done.
  set name(newName) {
    if (newName.length >= 5) {
      this._name = newName;
    } else {
      throw new Error('Name should be at least 5 characters');
    }
  }

  addBook(book) {
    this.books.push(book);
  }

  findBook(title) {
    return this.books.filter(b => b.title === title);
  }

  deleteBook(title) {
    this.books = this.books.filter(b => b.title !== title);
  }

  showBooks() {
    this.books.forEach(b => {
      console.log('Showing...', b);
    });
  }
}

let readersParadise = new BookStore("Readers' Paradise");
readersParadise.addBook(new Book('JavaScript', 'XYZ', 100, 250));
readersParadise.addBook(new Book('C++', 'ABC', 700, 1000));
readersParadise.addBook(new Book('C#', 'DEF', 250, 600));
readersParadise.addBook(new Book('Java', 'MNP', 300, 500));

readersParadise.showBooks();

console.log(readersParadise.findBook('C++'));

readersParadise.deleteBook('Java');
readersParadise.showBooks();

console.log(readersParadise.name);

readersParadise.name = 'Books forever';

console.log(readersParadise.name);
console.log(readersParadise._name);

console.log(typeof readersParadise);
