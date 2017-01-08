'use strict';

/**
 * /auth/logout
 * Logout
 * 
 * The auth route deals with authenticating users and resetting passwords.
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

/**
 * GET /auth/logout
 */
router.get('/', function(req, res, next) {
  // If no user is logged in, redirect
  if (!res.locals.isLoggedIn) {
    res.redirect('/auth/login');
    return;
  }
  
  firebase.auth()
    .signOut()
    .then(function() {
    // Sign-out successful.
    const successMsg = 'You have successfully logged out.';
    
    const successUri = 'success=' + encodeURIComponent(successMsg);
    
    res.redirect('/auth/login?' + successUri);
    return;
  }, function(err) {
    // An error happened.
    const errCode = err.code;
    const errMsg = err.message;

    const errUri = 'error=' + encodeURIComponent(errMsg);

    res.redirect('/admin?' + errUri);
    return;
  });
  return;
});

module.exports = router;
