'use strict';

/**
 * /admin
 * Admin
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

/**
 * /admin
 */
router.get('/', function(req, res, next) {
  // If no user is logged in, redirect
  if (!res.locals.isLoggedIn) {
    res.redirect('/auth/login');
    return;
  }
  
  const user = firebase.auth().currentUser;
  
  res.render('pages/admin', {
    userEmail: user.email,
  });
  return;
});

module.exports = router;
