/**
 * External dependencies.
 */

var mongoose = require('mongoose');

/**
 * Drop all known mongoose collections before
 * each test.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.on('pre:test', function(file, done) {
    var collections = Object.keys(mongoose.connection.collections);
    var len = collections.length;
    if (len === 0) return done();

    var timeout = setTimeout(function() {
      throw new Error('mongoose collections drop took more than 2s. Make sure that you have established a database connection');
    }, 2000);

    var end = function() {
      clearTimeout(timeout);
      done();
    };

    collections.forEach(function(collection) {
      mongoose.connection.collections[collection].drop(function() {
        if (--len === 0) end();
      });
    });
  });
};
