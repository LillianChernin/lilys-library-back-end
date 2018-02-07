const models = require('../models');
const Book = models.Book;

const index = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  });
}

const show = (req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  });
}

const create = (req, res) => {
  let newBook = new Book(req.body);
  newBook.save((err, newBookObject) => {
    if (err) {
      res.send(err);
    }
    res.json(newBookObject);
  });
}

const updateBookInfo = (req,res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    book.title = req.body.title;
    book.author = req.body.author;
    book.genres = req.body.genres;
    book.keywords = req.body.keywords;
    book.datePublished = req.body.datePublished;
    book.format = req.body.format;
    book.imageUrl = req.body.imageUrl;
    book.location = req.body.location;
    book.isbn = req.body.isbn;
    book.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    })
  })
}

const updateLocation = (req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    book.location = req.body;
    book.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    })
  })
}

const borrowBook = (req, res) => {
  let newDueDate = new Date(+new Date + 12096e5);
  console.log(newDueDate);
  console.log(req.body);
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    book.onLoan = true;
    book.currentUser = req.body;
    book.dateDue = newDueDate;
    book.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
;    })
  })
}

const returnBook = (req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    book.onLoan = false;
    book.currentUser = "";
    book.dateDue = new Date();
    book.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    })
  })
}

const destroy = (req, res) => {
  Book.remove({_id: req.params.book_id}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  })
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.updateBookInfo = updateBookInfo;
module.exports.updateLocation = updateLocation;
module.exports.borrowBook = borrowBook;
module.exports.returnBook = returnBook;
module.exports.destroy = destroy;
