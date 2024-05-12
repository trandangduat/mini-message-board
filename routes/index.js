const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const messages = [
  {
    text: "Me when the imposus sussy baka bussy is not sussy fr fr",
    user: "ngoitrongtoilet_gaothettemem",
    added: new Date()
  },
  {
    text: "level 5 gyatt rizz livvy dunne rizzing up baby gronk ice spice wat da dawg doin skibidi toilet in real life only in ohio we go jim zyzz creatine alpha sigma cuh dey board",
    user: "sieunhangao@123",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  const formattedMessages = messages.map((message) => {
    return {
      ...message,
      added: dayjs(message.added).fromNow()
    }
  });
  res.render('index', { title: 'Message Board', messages: formattedMessages });
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
