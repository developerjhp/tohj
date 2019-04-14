// Run this example with `node examples/chaining.js`
// It will succeed most of the time, but fail occasionally to demonstrate error handling
const util = require('util');
const db = require('./lib/db');

// change callback functions to promises using promisify
const findUserInDatabaseAsync = util.promisify(db.findUserInDatabase);
const hashPasswordAsync = util.promisify(db.hashPassword);
const createAndSaveUserAsync = util.promisify(db.createAndSaveUser);

const addNewUserToDatabaseAsync = function(user) {
  // The outermost `return` lets us continue the chain
  // after an invocation of `addNewUserToDatabaseAsync`
  return findUserInDatabaseAsync(user)
    .catch(function(existingUser) {
        throw new Error(existingUser.name + ' already exists!'); // Head straight to `catch`.
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
    console.log('All done! ' + savedUser.name + " saved!");
  })
  .catch(function(err) {
    // Will catch any promise rejections or thrown errors in the chain!
    console.log('Oops, caught an error: ', err.message);
  });
