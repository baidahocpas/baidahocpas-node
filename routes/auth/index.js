'use strict';

/**
 * /auth
 * Auth
 * 
 * The auth route deals with authenticating users and resetting passwords.
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

// Routes
const login = require('./login');
const logout = require('./logout');

router.use('/login', login);
router.use('/logout', logout);

/**
 * Redirect to login
 */
router.get('/', function(req, res, next) {
  res.redirect('/auth/login');
  return;
});

module.exports = router;
