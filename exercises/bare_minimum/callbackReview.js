/**
 * Implement these functions following the node style callback pattern
 */

const fs = require('fs');
const request = require('request');

// This function should retrieve the first line of the file at `filePath`
const pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
const getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
