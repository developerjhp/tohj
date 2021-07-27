const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // return getDataFromFilePromise(user1Path)
  // .then(data1 => {
  //   return getDataFromFilePromise(user2Path)
  //   .then(data2 => {
  //     return JSON.parse(`[${data1},${data2}]`)
  //   })
  // })
  let res = [];
  return getDataFromFilePromise(user1Path)
    .then(data1 => {
      res.push(JSON.parse(data1))
      return getDataFromFilePromise(user2Path)
    })
    .then(data2 => {
      res.push(JSON.parse(data2))
      return res
    })
}

// readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}