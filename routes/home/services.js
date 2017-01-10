'use strict';

/**
 * /home/services
 * Services
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

/**
 * GET /home/services
 */
router.get('/', function(req, res, next) {
  res.render('pages/home/services');
  return;
});

module.exports = router;
