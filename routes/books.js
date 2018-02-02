const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  models.Book.find({},(err, books) => {
    if (err) {
      res.send(err);
    }
    res.json(books);
  })
})

module.exports = router;
