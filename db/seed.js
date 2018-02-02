const mongoose = require('mongoose');
const db = require('../models');



const bookList = [
  {
    title: "Language in Thought and Action",
    author: ["S. I. Hayakawa", "Alan R Hayakawa"],
    genres: ["nonfiction","linguistics"],
    keywords: ["linguistics","language"],
    datePublished: "1991",
    format: "book"
  },{
    title: "Massage Therapy: Principles and Practice",
    author: ["Susan G. Salvo"],
    genres: ["nonfiction","textbooks","reference"],
    keywords: ["massage therapy"],
    datePublished: "2011",
    format: "book"
  },{
    title: "Introduction to Quantum Mechanics",
    author: ["David J. Griffiths"],
    genres: ["physics","science","textbooks"],
    keywords: ["physics", "quantum mechanics"],
    datePublished: "2004",
    format: "book"
  }
]

db.Book.create(bookList, (err, books) => {
  if (err) {
    return console.log('ERROR ' + err);
  }
  console.log("all books " + books);
  console.log("created " + books.length + " books");
  process.exit();
});
