book = {
  title: 'The Brothers Karamazov'
};

function read() {
  console.log(`${this.title} is reading...`);
}

read.apply(book); //  specifically pass the this argument (book object in this case)
read();
// let newRead = read.bind(book); //  specifically pass the this argument (book object in this case)
// newRead();
// newRead();
// newRead();
