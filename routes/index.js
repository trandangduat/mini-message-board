const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hello",
    user: "Duat",
    added: new Date()
  },
  {
    text: "Hello again",
    user: "Kussso",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.content,
    user: req.body.username,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
