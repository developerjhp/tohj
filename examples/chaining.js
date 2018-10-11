// Run this example with `node examples/chaining.js`
// It will succeed most of the time, but fail occasionally to demonstrate error handling

var util = require('util');
var db = require('../lib/db');
const findUserInDatabaseAsync = util.promisify(db.findUserInDatabase);
const hashPasswordAsync = util.promisify(db.hashPassword);
const createAndSaveUserAsync = util.promisify(db.createAndSaveUser);

var addNewUserToDatabaseAsync = function(user) {
  // The outermost `return` lets us continue the chain
  // after an invocation of `addNewUserToDatabaseAsync`
  return findUserInDatabaseAsync(user)
    .then(function(existingUser) {
      if (existingUser) {
        throw new Error('User already exists!'); // Head straight to `catch`. Do not pass Go, do not collect $200
      } else {
        return user; // Return a syncronous value
      }
    })
    .then(function(newUser) {
      return hashPasswordAsync(newUser); // Return a promise
    })
    .then(function(securedUser) {
      return createAndSaveUserAsync(securedUser); // Return another promise
    });
};

addNewUserToDatabaseAsync({ name: 'Dan', password: 'chickennuggets' })
  .then(function(savedUser) {
    console.log('All done!');
  })
  .catch(function(err) {
    // Will catch any promise rejections or thrown errors in the chain!
    console.log('Oops, caught an error: ', err.message);
  });
