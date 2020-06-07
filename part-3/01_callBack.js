const http = require('http')

const getBodyFromGetRequest = function (url, callback) {
  try {
    // http.get(...)
    // TODO: http.get을 이용해 작성합니다

  } catch (err) {
    // http.get 메소드에서 에러 객체를 직접 던지는 경우, 이렇게 try/catch 구문을 이용해 callback을 실행시켜줄 수 있습니다.
    callback(err, null);
  }
};

module.exports = {
  getBodyFromGetRequest
};
