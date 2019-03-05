describe('Bare Minimum Requirements', function() {
  require('./bare_minimum/student.test.js');
  require('./bare_minimum/callbackReview.test.js');
  require('./bare_minimum/promiseConstructor.test.js');
  require('./bare_minimum/promisification.test.js');
  require('./bare_minimum/basicChaining.test.js');
  require('./bare_minimum/asyncAwait.test.js');
  require('./bare_minimum/review.test.js');
});

xdescribe('Advanced Content', function() {
  require('./advanced/collections.test.js');
  require('./advanced/PromiseLib.test.js');
});
