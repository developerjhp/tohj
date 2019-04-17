var fs = require('fs');
var nock = require('nock');
var expect = require('chai').expect;

describe('async/await keyword', function() {
  var chaining = require('../../exercises/bare_minimum/asyncAwait.js');

  describe('fetchProfileAndWriteToFileAsync', function() {
    var fetchProfileAndWriteToFileAsync = chaining.fetchProfileAndWriteToFileAsync;

    // These tests are tightly couples to the initial state of these files
    var fileWithGithubHandle = __dirname + '/../files/github_handle.txt';
    var fileToWriteTo = __dirname + '/../files/file_to_write_to.txt';

    before(function() {
      // Nock is a super cool library that makes it easy to test
      // functions that send HTTP requests. Nock intercepts all outgoing
      // requests and allows us to send back any response we want instead.
      // Since no actual requests is ever sent, our tests run faster
      // and we preserve our API rate limits.
      nock('https://api.github.com')
        .get('/users/codestates-admin')
        .times(2) // Send same response for both tests
        .reply(200, {
          id: 28751962,
          login: 'codestates-admin',
          name: 'Code States Official',
          company: '@codestates',
          location: 'Seoul, South Korea',
        });
    });

    beforeEach(function() {
      fs.writeFileSync(fileToWriteTo, '');
    });

    it('should implement with async/await keyword', function() {
      expect(fetchProfileAndWriteToFileAsync.constructor.name).to.be.eql('AsyncFunction');
      expect(fetchProfileAndWriteToFileAsync.toString().match(/await/g).length).to.be.above(2);
    });

    it('should work same as Basic chaining', function(done) {
      fetchProfileAndWriteToFileAsync(fileWithGithubHandle, fileToWriteTo)
        .then(function() {
          var profile = JSON.parse(fs.readFileSync(fileToWriteTo, 'utf8'));
          expect(profile.id).to.equal(28751962);
          done();
        })
        .catch(done);
    });

    afterEach(function() {
      fs.writeFileSync(fileToWriteTo, '');
    });

    // Restore HTTP requests to their normal unmocked behavior
    after(function() {
      nock.cleanAll();
    });

  });

});
