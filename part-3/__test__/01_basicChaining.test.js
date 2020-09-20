if (typeof window === "undefined") {
  var getNewsAndWeather = require("../01_basicChaining");
  var expect = require("chai").expect;
} else {
  // 첫번째 해결책!
  // testing the native fetch is possible ONLY in browsers
  // that's because it's (browsers') native
  sinon.spy(window, "fetch");
  sinon.spy(Promise, "all");
  beforeEach(function () {
    window.fetch.resetHistory();
    Promise.all.resetHistory();
  });
}

// 두번째 해결책
// delete comments
const MULTI_LINES_COMMENT = /\/\*[\s\S]*?\*\/(\r?\n|\r)/;
const ONE_LINE_COMMENT = /\/\/.*(\r?\n|\r)/;
const COMMENT = new RegExp(
  `${MULTI_LINES_COMMENT.source}|${ONE_LINE_COMMENT.source}`,
  "g",
);
const funcBody = getNewsAndWeather.toString().replace(COMMENT, "");

describe("Chaining Test", () => {
  describe("getNewsAndWeather", () => {
    it("체이닝의 결과가 Promise 형태로 리턴되어야 합니다", () => {
      const result = getNewsAndWeather();
      expect(result.constructor.name).to.equal("Promise");
    });

    it("/data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 새로운 객체로 리턴되어야 합니다", (
      done,
    ) => {
      getNewsAndWeather()
        .then((json) => {
          const obj = {
            news: [
              {
                row_id: 2,
                title: "2021년 경제 성장률 전망 밝아",
                source: "A신문",
                timestamp: "2020/12/30",
              },
              {
                row_id: 3,
                title: "코로나19 증가추세 대폭 하락해",
                source: "BBC",
                timestamp: "2020/12/29",
              },
              {
                row_id: 4,
                title: "코드스테이츠 취업연계 파트너사 xxx건 돌파",
                source: "스타트업 뉴스",
                timestamp: "2020/12/31",
              },
            ],
            weather: { status: "sunny", tempature: "28", finedust: "good" },
          };
          expect(json).to.deep.equal(obj);
          done();
        })
        .catch(done);
    });

    it("fetch를 활용하세요. 총 두 번 사용해야 합니다", (done) => {
      // expect(getNewsAndWeather.toString().match(/fetch/g)).to.have.length(2);

      // 첫번째 해결책
      getNewsAndWeather()
        .then((json) => {
          expect(fetch.callCount).to.be.equal(2);
          done(); // 실제 호출이 이루어지므로 테스트함수의 콜백에 인자로 done을 추가함
        })
        .catch(done);

      // 두번째 해결책
      // expect(funcBody.match(/fetch/g)).to.have.length(2);
    });

    it("Promise.all 또는 async/await 을 사용하지 않고 풀어보세요", (done) => {
      // expect(getNewsAndWeather.toString()).not.to.match(/Promise\.all/g);
      // expect(getNewsAndWeather.toString()).not.to.match(/await/g);

      // 첫 번째 해결책
      getNewsAndWeather()
        .then((json) => {
          expect(Promise.all.called).to.be.equal(false);
          expect(funcBody).not.to.match(/await/g); // await은 함수가 아니고 statement이므로 정규식으로 해결할 수 밖에 없음.
          done(); // 실제 호출이 이루어지므로 테스트함수의 콜백에 인자로 done을 추가함
        })
        .catch(done);

      // 두 번째 해결책
      // expect(funcBody).not.to.match(/Promise\.all/g);
      // expect(funcBody).not.to.match(/await/g);
    });
  });
});
