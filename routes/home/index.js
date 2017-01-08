'use strict';

/**
 * /
 * Home
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

/**
 * /
 */
router.get('/', function(req, res, next) {
  res.render('pages/home');
  return;
});

module.exports = router;
