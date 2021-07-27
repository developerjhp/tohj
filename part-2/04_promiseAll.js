const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // return Promise.all([getDataFromFilePromise(user1Path),getDataFromFilePromise(user2Path)])
  // .then(([...data]) => {
  //   let [user1,user2] = [...data] 
  //   return JSON.parse(`[${user1},${user2}]`)
  // })
  return Promise.all([getDataFromFilePromise(user1Path),getDataFromFilePromise(user2Path)])
    .then(([user1,user2]) => {
      return JSON.parse(`[${user1},${user2}]`)
    })
}

// readAllUsers()

module.exports = {
  readAllUsers
}