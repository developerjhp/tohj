const delay = (time, value) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), Math.random() * 1000 + time);
  });
};

const marryMePromise = () => {
  console.log("[You] Will you marry Me? 🤗");
  return delay(1000);
};

marryMePromise()
  .then(() => {
    console.log("[Partner] Oh 😳, give me about five seconds?");
    return delay(1000);
  })
  .then(() => {
    console.log("[You] Yes, take your time. 😊");
    return delay(5000);
  })
  .then(() => {
    let randomNum = Math.floor(Math.random() * Math.floor(10));
    let isOdd = randomNum % 2;

    if (isOdd) {
      console.log("[Partner] My answer is Yes 😘");
    } else {
      console.log("[Partner] My answer is No, I hate you! 🤬");
    }

    return delay(2000, isOdd);
  })
  .then(isOdd => {
    if (isOdd) {
      console.log("[You] This ring is yours! 💍");
    } else {
      console.log("[You] You're My heart breaker 😭");
    }
  });
