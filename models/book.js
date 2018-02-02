const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  title: String,
  author: Array,
  genres: Array,
  keywords: Array,
  datePublished: String,
  format: String,
  onHold: Boolean,
  onLoan: Boolean,
  currentUser: String,
  dateDue: Date
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
