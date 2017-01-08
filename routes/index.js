/**
 * Routes
 */

const constants = require('../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

router.use(function(req, res, next) {
  // Set constants
  res.locals.siteTitle = constants.siteTitle;
  res.locals.siteTitleShort = constants.siteTitleShort;
  res.locals.siteDescription = constants.siteDescription;
  res.locals.contactEmail = constants.contactEmail;
  
  // Set alerts
  if (req.query.error) {
    res.locals.error = req.query.error;
  }
  
  if (req.query.success) {
    res.locals.success = req.query.success;
  }
  
  // Get bool user logged in
  res.locals.isLoggedIn = !!firebase.auth().currentUser;
  
  next();
});

// Routes
const home = require('./home');
const admin = require('./admin');
const auth = require('./auth');

router.use('/', home);
router.use('/admin', admin);
router.use('/auth', auth);

module.exports = router;
