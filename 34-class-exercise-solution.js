class Book {
  constructor(title, author, price, pages) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.pages = pages;
  }
}

class BookStore {
  constructor() {
    this.books = [];
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

let readersParadise = new BookStore();
readersParadise.addBook(new Book('JavaScript', 'XYZ', 100, 250));
readersParadise.addBook(new Book('C++', 'ABC', 700, 1000));
readersParadise.addBook(new Book('C#', 'DEF', 250, 600));
readersParadise.addBook(new Book('Java', 'MNP', 300, 500));

readersParadise.showBooks();

console.log(readersParadise.findBook('C++'));

readersParadise.deleteBook('Java');
readersParadise.showBooks();
