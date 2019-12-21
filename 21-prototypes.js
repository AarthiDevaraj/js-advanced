let book = {
  title: 'Default title'
};

let fiction = {
  __proto__: book
};

let novel = {
  category: 'historical',
  read: function() {
    console.log('Reading...', this.title);
  },
  __proto__: fiction
};

novel.read();
