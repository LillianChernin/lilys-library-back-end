const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  title: String,
  author: Array,
  genres: Array,
  keywords: Array,
  datePublished: String,
  format: {type: String, default: "book"},
  onHold: {type: Boolean, default: false},
  onLoan: {type: Boolean, default: false},
  currentUser: String,
  dateDue: Date,
  imageUrl: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
