var mongoose = require('mongoose');
var Test = mongoose.model('Test');

test('store items', function(done) {
  Test.create({ foo: true }, done)
});

test('drop collections', function() {
  Test.find(function(err, tests) {
    if (err) throw err;
    assert(test.length === 0);
  });
});
