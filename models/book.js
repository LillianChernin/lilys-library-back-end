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
  holdOwner: String,
  holdEndDate: Date,
  dateDue: {type: Date, default: new Date()},
  imageUrl: String,
  location: String,
  isbn: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
