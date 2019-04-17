/*
 * 다음 함수를 async/await 키워드를 이용하여 작성하세요.
 * 기본적인 구현 내용은 basicChaining의 내용과 똑같습니다. 다만 해당 내용을 async/await을 이용해서 구현해야 합니다.
 *
 * (1) `readFilePath` 파라미터를 통해 파일의 첫번째 줄을 읽어옵니다. (여기엔 GitHub username이 담겨있습니다.)
 * (2) 그리고, 그 username과 함께 GitHub API에 요청을 보내, 프로파일을 가져옵니다. (JSON 형태로 응답이 옵니다.)
 * (3) 그리고, 그 프로파일을, `writeFilePath` 파라미터에 담긴 파일에 저장합니다. (텍스트 형태로 저장합니다.)
 *
 * HINT: 새로 구현하지 마세요. 이전에 연습문제에서 export한 함수가 Promise를 리턴했던 것을 기억하세요!
 */

const fs = require('fs');
const util = require('util');

const pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
const getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
const writeFileAsync = util.promisify(fs.writeFile);

const fetchProfileAndWriteToFileAsync = function(readFilePath, writeFilePath) {
  // TODO

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFileAsync: fetchProfileAndWriteToFileAsync
};
