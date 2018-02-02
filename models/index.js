const mongoose = require('mongoose');
mongoose.connect(ENV.MONGODB_URI);

module.exports.Book = require('./book');
module.exports.User = require('./user');
