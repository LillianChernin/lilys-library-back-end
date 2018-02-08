const express = require('express');
const router = express.Router();
const models = require('../models');
const bookController = require('../controllers/book');

router.get('/', bookController.index);

router.get('/on-loan', bookController.showOnLoan);

router.get('/:book_id', bookController.show);

router.post('/', bookController.create);

router.put('/:book_id/update-book-info', bookController.updateBookInfo);

router.put('/:book_id/update-location', bookController.updateLocation);

router.put('/:book_id/borrow-book', bookController.borrowBook);

router.put('/:book_id/return-book', bookController.returnBook);

router.put('/:book_id/place-hold', bookController.placeHold);

router.put('/:book_id/remove-hold', bookController.removeHold);

router.delete('/:book_id', bookController.destroy);

module.exports = router;
