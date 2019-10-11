// ./lib/asyncLib.js의 함수를 사용합니다.
const asyncLib = require('./lib/asyncLib.js');

const promises = [
  asyncLib.getValueA(),
  asyncLib.getValueB(),
  asyncLib.getValueC(),
  asyncLib.getValueD()
]

console.log(promises)

Promise.all(promises)
.then(asyncLib.logResolvedValues)
.then(asyncLib.filterValuesFromCollection)
.then(asyncLib.doMoreAsyncWorkWithFilteredValues)
// console.log.bind(console)란 무엇인가?
// https://stackoverflow.com/questions/28668759/what-does-this-statement-do-console-log-bindconsole
.catch(console.log.bind(console));