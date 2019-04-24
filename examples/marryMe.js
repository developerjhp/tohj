const marryMe = callback => {
  console.log("[You] Will you marry Me? 🤗");

  setTimeout(() => {
    callback("[Partner] Oh 😳, give me about five seconds?");
    // Actually, your partner doesn't know what to do, but
    // the partner is a javascript developer so,
    // he/she decides that if he/she get odd number
    // using Math.random(), the partner accepts your propose.
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
