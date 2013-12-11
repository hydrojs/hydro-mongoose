/**
 * External dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('127.0.0.1', function(err) {
  if (err) throw err;
});

mongoose.model('Test', new Schema({
  foo: Boolean
}));

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var plugin = require('./index');

  hydro.set({
    plugins: [plugin],
    attach: global,
    proxies: {
      test: 'addTest'
    },
    suite: 'hydro-mongoose',
    formatter: 'hydro-simple',
    globals: {
      assert: require('simple-assert')
    },
    tests: [
      'test'
    ]
  });
};
