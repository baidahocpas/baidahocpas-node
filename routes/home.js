var express = require('express');
var router = express.Router();
var c = require('../config/constants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', {
    siteTitle: c.siteTitle,
    siteTitleShort: c.siteTitleShort,
    siteDescription: c.siteDescription,
  });
});

module.exports = router;
