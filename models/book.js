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
  dateDue: {type: Date, default: new Date()},
  imageUrl: String,
  location: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
