# Promises

## 이번 Sprint의 학습 목표

- 어떤 경우에 중첩된 callback이 발생하는지 이해한다.
- 중첩된 callback의 단점을 이해한다.
- Asynchronous code를 읽고 쓰기 편하도록 Promise를 사용해본다.
- `async`/`await` keyword에 대해 이해하고, 작동 원리 및 장점 및 단점을 이해한다.
- node.js의 `fs` 모듈의 사용법을 이해한다.
- node.js의 공식 문서를 읽고 사용할 수 있다.

## Sprint를 시작하기 전 알고있어야 하는 것들

Sprint를 원활히 진행하기 위해 꼭 알고있어야하는 것들입니다.
아래 항목들 중 모르는 것이 있다면 Sprint를 시작하기 전 꼭 help-desk에 문의부탁드립니다.

- [ ] method chaining (Array의 `map`, `filter` 등을 연결해서 쓰는 법)을 할 수 있다.
- [ ] 비동기 함수와 callback 함수에 대해서 알고있고, 잘 사용할 수 있다.
- [ ] fetch API를 사용할 수 있다.
- [ ] `require`, `module.exports` 등의 node module 사용법을 이해하고 있다.

## Sprint를 시작하기 전 해볼 것들

본격적으로 Sprint를 시작하기 전 아래 항목들을 먼저 확인해봅니다.

- [ ] [request](https://github.com/request/request) 라이브러리 사용 방법 확인
- [ ] `fs.readFile` 메소드 사용 방법 확인

## Sprint에서 해볼 것들

- [ ] `basicChaining` 에서 가능한 최소한의 코드로 작성하기
- [ ] bare minimum requirement 가 끝난 후, `async`/`await`으로 리팩토링 하기

## Advanced 한 과제들

- [ ] Promise.all 사용해보기
- [ ] `async`/`await` 사용 시 `try`/`catch`를 통한 에러 처리를 이해한다.
- [ ] Promise 직접 구현해보기

## Sprint 진행 방법

1. 현재 repo를 자신의 Github으로 fork 합니다.
2. fork된 repo를 git clone 명령어로 자신의 local 환경으로 다운로드합니다.
3. examples 폴더의 예제를 실행하려면 `cd examples` && `node {filename}.js`로 확인할 수 있습니다.
4. examples 폴더의 파일을 확인하여 Promise의 개념에 대해 접해보고 exercises coding을 시작합니다.

## 제출 방법

1. [student.json](student.json) 파일에 필요한 정보를 입력합니다.
2. 자신의 remote repo로 push 합니다.
3. `npm run test` 를 통해 테스트 결과를 업데이트 합니다.
4. `npm run submit' 을 통해 테스트 결과를 제출 합니다.
