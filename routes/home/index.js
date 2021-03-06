'use strict';

/**
 * /home
 * Home
 */

// Import
const constants = require('../../config/constants');
const express = require('express');
const firebase = require('firebase');

const router = express.Router({ mergeParams: true });
const db = firebase.database();

// Routes
const services = require('./services');

router.use('/services', services);

/**
 * GET /home
 */
router.get('/', function(req, res, next) {
  res.render('pages/home');
  return;
});

module.exports = router;
