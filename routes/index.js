var express = require('express');
var router = express.Router();

var key = process.env.KEY;

var unirest = require('unirest')

/* GET home page. */
router.get('/books', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + key)
    .end(function (response) {
      var nytBooks = response.body.results.books;
      // console.log(nytBooks);
      // res.end('Done');
      res.render('index', { books: nytBooks });
    })

});

module.exports = router;
