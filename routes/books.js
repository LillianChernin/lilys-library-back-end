const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Book.find({}, (err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  })
})

router.get('/:book_id', (req, res) => {
  models.Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  })
})

router.post('/', (req, res) => {
  let newBook = new models.Book(req.body);
  newBook.save((err, newBookObject) => {
    if (err) {
      res.send(err);
    }
    res.json(newBookObject);
  });
})

router.delete('/:book_id', (req, res) => {
  models.Book.remove({_id: req.params.book_id}, (err, book) => {
    if (err) {
      res.send(err);
    }
    res.json(book);
  })
})

module.exports = router;
