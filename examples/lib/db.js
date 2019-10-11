// 실제 DB 정보를 가져오는 것이 아닌 setTimeout으로 시간을 딜레이 해서 유사한 상황을 구현하였습니다.

/* eslint-disable-next-line */
const colors = require('colors');

const findUserInDatabase = function(user, callback) {
  console.log('Searching for user ' + user.name.yellow + ' from ' + 'findUserInDatabase'.green);
  setTimeout(function() {

    // 처리 결과를 확률로 정의 합니다 (0 ~ 1)
    let state = Math.random();

    if (state < 0.7) {    // 70%
      console.log('Found ' + '0'.yellow + ' record(s)');
      // Call the callback function. Note the first parameter is an error
      callback(null, user);
    } else if (state > 0.8) {   // 20%
      console.log('Found ' + '1'.yellow + ' record(s)');
      callback(user, null);
    } else {  // 10%
      console.log('Error searching for user!'.red);
      callback('Error searching for user', null);
    }

  }, Math.random() * 1000 + 1000);  // 랜덤한 시간만큼 딜레이
};

const hashPassword = function(user, callback) {
  console.log('Hashing ' + user.name.yellow + '\'s password ' + user.password.yellow + ' in ' + 'hashPassword'.green);
  setTimeout(function() {

    let state = Math.random();

    if (state < 0.8) {
      user.password = '10101010101';
      console.log('Done hashing! Hashed password: ' + user.password.yellow);
      callback(null, user);
    } else {
      console.log('Error hashing password'.red);
      callback('Error searching for user', null);
    }

  }, Math.random() * 1000 + 1000);
};

const createAndSaveUser = function(user, callback) {
  console.log('Saving secured user ' + user.name.yellow + ' with hashed password ' + user.password.yellow + ' in ' + 'createAndSaveUser'.green);
  setTimeout(function() {

    let state = Math.random();

    if (state < 0.8) {
      console.log('Successfully created and saved user ' + user.name.yellow);
      callback(null, user);
    } else {
      console.log('Error creating and saving user'.red);
      callback('Error searching for user', null);
    }

  }, Math.random() * 1000 + 1000);
};

module.exports = {
  findUserInDatabase: findUserInDatabase,
  hashPassword: hashPassword,
  createAndSaveUser: createAndSaveUser
};
