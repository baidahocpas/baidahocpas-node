'use strict';

/**
 * /auth/login
 * Login
 * 
 * The auth/login route deals with logging users in.
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');
const log = require('../../config/log');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

/**
 * GET /auth/login
 */
router.get('/', function(req, res, next) {  
  // If user is logged in, redirect
  if (res.locals.isLoggedIn) {
    res.redirect('/admin');
    return;
  }
  
  res.render('pages/auth/login');
  return;
});

/**
 * POST /auth/login
 */
router.post('/', function(req, res, next) {
  const userEmail = req.body.userEmail;
  const userPasswd = req.body.userPasswd;
  
  // If fields contain data...
  if (userEmail.length > 0 && userPasswd.length > 0) {
    firebase.auth()
      .signInWithEmailAndPassword(userEmail, userPasswd)
      .then(function() {
        log(req.originalUrl, {
          loginEmail: userEmail,
          loginSuccess: true,
        });
        
        res.redirect('/admin');
        return;
      })
      .catch(function(err) {
        log(req.originalUrl, {
          loginEmail: userEmail,
          loginSuccess: false,
          error: err.message,
        });
        
        const errCode = err.code;
        const errMsg = err.message;
        
        const errUri = 'error=' + encodeURIComponent(errMsg);
        
        res.redirect('/auth/login?' + errUri);
        return;
      });
  }
  return;
});

module.exports = router;
