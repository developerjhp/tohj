// Run this file with `node examples/promiseDotAll.js`
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
// `bind` sets correct context when using console.log as a callback
.catch(console.log.bind(console));