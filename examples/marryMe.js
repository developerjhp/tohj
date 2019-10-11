// 결혼을 요청하여 답변을 받는 로직입니다.
// 각 기다리는 시간은 답변을 듣기위해 생각하는 시간입니다.
// 총 4번의 콜백을 호출하여 랜덤한 수를 뽑아 값이 짝수면 결혼, 아니면 거절에 대한 반응이 출력됩니다.

const marryMe = callback => {
  console.log("[You] Will you marry Me? 🤗");

  setTimeout(() => {
    callback("[Partner] Oh 😳, give me about five seconds?");
    setTimeout(() => {
      callback("[You] Yes, take your time. 😊");
      setTimeout(() => {
        let randomNum = Math.floor(Math.random() * Math.floor(10));
        let isOdd = randomNum % 2;

        if (isOdd) {
          callback("[Partner] My answer is Yes 😘");
        } else {
          callback("[Partner] My answer is No, I hate you! 🤬");
        }

        setTimeout(() => {
          if (isOdd) {
            callback("[You] This ring is yours! 💍");
          } else {
            callback("[You] You're My heart breaker 😭");
          }
        }, Math.random() * 1000 + 2000);
      }, Math.random() * 1000 + 5000);
    }, Math.random() * 1000 + 1000);
  }, Math.random() * 1000 + 1000);
};

marryMe(console.log);
