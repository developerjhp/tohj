// 스토리 없는 비동기 예제입니다..
// 입력받은 값을 기반으로 순서대로 처리 Promise를 진행합니다.
// 랜덤한 값으로 시간이 딜레이 되며 처리된 순서대로 로그를 확인할 수 있습니다.

// colors는 console로 로그를 찍을 때 주로 색을 입히는 용도로 활용됩니다.
const colors = require('colors');

// The core helper function in this module. A complete time waster

/**
 * 
 * @param time 딜레이 되는 시간 
 * @param value  {
 *    @param value 입력받은 값(A, B ...)
      @param timeToResolve 딜레이 되는 시간, 첫번째 인자인 time과 값이 같음
      @param shouldPassFilter 성공여부를 판단하는 데이터 (50% 확률)
 * }
 */
const delay = function(time, value) {
  return new Promise(function(resolve, reject) {
    if (time > 10000) {
      reject(new Error('Delay for value ' + value + ' is too long'));
      return;
    }
    setTimeout(function() {
      resolve(value);
    }, time || 10);
  });
};

// 아래의 3가지 함수는 인자로 받은 데이터를 출력하고 일정시간 딜레이를 준뒤 반환하는 함수들입니다.
const logResolvedValues = function(resolvedFromPromiseDotAll) {
  console.log([
    '',
    'Promise.all has fulfilled!'.magenta,
    'Here are the results inside of ' + 'logResolvedValues'.green,
    JSON.stringify(resolvedFromPromiseDotAll, null, 2), // Pretty print our object
    'We\'re guaranteed all the async work in our collection is done now!!'.magenta,
  ].join('\n'));

  return delay(5000)
    .then(function() {
      console.log([
        '',
        '*********************************************************************',
        'IMPORTANT:'.red + ' Notice that the ' + 'resolved values are in the same order'.cyan,
        'with respect to their promise counterparts'.cyan + ' even though each promise',
        'might have resolved at a different time!',
        '(resolve times are random, it\'s a concidence if they line up)',
        '*********************************************************************',
      ].join('\n'));
      return delay(10000);
    })
    .then(function() {
      console.log('\nContinuing on to ' + 'filterValuesFromCollection'.green);
      return resolvedFromPromiseDotAll;
    });
};

const filterValuesFromCollection = function(collection) {
  // You can return non promises in a .then block too!
  console.log('Filtering values...');
  console.log('This is a syncronous option so it should be quick');
  return collection.filter(function(obj) {
    return obj.shouldPassFilter;
  });
};

const doMoreAsyncWorkWithFilteredValues = function(collection) {
  console.log([
    '',
    'Done filtering!'.magenta,
    'Here are the results inside of ' + 'doMoreAsyncWorkWithFilteredValues'.green,
    JSON.stringify(collection, null, 2),  // Pretty print our object
    'We could continue on and do more async work as needed...'.magenta
  ].join('\n'));

  return delay(5000)
    .then(function() {
      console.log([
        '',
        'Run this example again and/or',
        'play around until you understand Promise.all',
        'enough to continue on to the exercises!',
      ].join('\n').blue);
    });
};

module.exports = {
  delay: delay, // also used in tests
  logResolvedValues: logResolvedValues,
  filterValuesFromCollection: filterValuesFromCollection,
  doMoreAsyncWorkWithFilteredValues: doMoreAsyncWorkWithFilteredValues
};

// Promise 함수를 동적으로 만드는 로직입니다.
// 만약 아래의 배열을 외부에서 받으면 그대로 반영이 됩니다. 
// ex) ['1','2'] -> getValue1(), getValue2()
['A', 'B', 'C', 'D'].forEach(function(value) {
  module.exports['getValue' + value] = function() {
    // 처리되는 순서(배열 순서)대로 일감을 할당합니다 
    console.log('Getting ' + colors.yellow('value ' + value) + ' from ' + colors.green('getValue' + value + '()...'));
    let timeToResolve = Math.random() * 4000 + 1000;

    const obj = {
      value: value,
      timeToResolve: timeToResolve,
      shouldPassFilter: Math.random() > 0.5
    };

    return delay(timeToResolve, obj)
      .then(function(data) {
        // 처리가 끝나면 delay에서 반환된 데이터를 기반으로 로그를 호출합니다.
        console.log('Got ' + colors.yellow('value ' + data.value) + ' after ' + data.timeToResolve + 'ms');
        return data;
      });
  };
});

