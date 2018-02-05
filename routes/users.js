const express = require('express');
const router = express.Router();
const models = require('../models');


// router.get('/:user_id', (req, res) => {
//   models.User.findById(req.params.user_id, (err, user) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(user);
//   })
// })

router.post('/', (req, res) => {
  let newUser = new models.User(req.body);
  newUser.save((err, newUserObject) => {
    if (err) {
      res.send(err);
    }
    res.json(newUserObject);
  });
})

// router.delete('/:book_id', (req, res) => {
//   models.Book.remove({_id: req.params.book_id}, (err, book) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(book);
//   })
// })

module.exports = router;
