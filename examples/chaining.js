// 현재 파일의 결과 로그를 확인하시려면 터미널에 `node examples/chaining.js` 명령어를 치시면 됩니다.
const util = require('util');
const db = require('./lib/db');

// ./lib/db에 구현 되어있는 단순한 콜백 함수를 util의 promisify 함수를 사용하여 Promise 형태로 변경합니다
const findUserInDatabaseAsync = util.promisify(db.findUserInDatabase);
const hashPasswordAsync = util.promisify(db.hashPassword);
const createAndSaveUserAsync = util.promisify(db.createAndSaveUser);

const addNewUserToDatabaseAsync = function(user) {
  return findUserInDatabaseAsync(user)
    // findUserInDatabaseAsync가 정상적으로 처리되었으면 Promise를 리턴하여 첫번째 .then()이 실행됩니다.
    .then(function(newUser) {
      return hashPasswordAsync(newUser);
    })
    // 마찬가지로 hashPasswordAsync가 정상적으로 처리되었으면 Promise를 리턴합니다.
    .then(function(securedUser) {
      return createAndSaveUserAsync(securedUser); 
    })
    // 위의 3번의 Promise 함수가 호출이 되었을 때 문제가 생기면 함수 내에서 반환되어 catch 로직이 실행됩니다.
    .catch(function(existingUser) { 
      // 다음 Promise 함수를 호출하는 것이 아닌 Error를 throw하여 addNewUserToDatabaseAsync의 Promise 로직을 마칩니다.
      throw new Error(existingUser.name + ' already exists!');  
    });
};

addNewUserToDatabaseAsync({ name: 'Dan', password: 'chickennuggets' })
  // 3가지 함수로직이 성공적으로 호출이 되면 최종적으로 All done! 로그가 찍히게 됩니다.
  .then(function(savedUser) {    
    console.log('All done! ' + savedUser.name + " saved!");
  })
  // throw 된 Error가 존재하면 해당 에러를 err 인자로 받아 로그를 호출하고 마무리됩니다.
  .catch(function(err) {
    console.log('Oops, caught an error: ', err.message);
  });
