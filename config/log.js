'use strict';

/**
 * LOG
 * 
 * Helper function that logs to your firebase database at /logs
 */

// Import
const constants = require('./constants');
const firebase = require('firebase');

const db = firebase.database();

/**
 * newLog(uri, data)
 * 
 * Takes data as input, creates log with data.
 */
function newLog(uri, data) {
  const log = {
    date: null,
    user: null,
    uri: null,
    data: null,
  };
  
  // TIMESTAMP
  let date = new Date();
  log.date = date.toISOString();
  
  // USER
  const user = {};
  
  // If user is logged in, record user data
  const currentUser = firebase.auth().currentUser;
  if (currentUser != null) {
    user.displayName = currentUser.displayName;
    user.email = currentUser.email;
    user.uid = currentUser.uid;
  }
  
  log.user = user;
  
  // URI
  log.uri = uri;
  
  // DATA
  log.data = data;
  
  const newLogRef = db.ref('logs').push(log);
}

module.exports = newLog;
