var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}