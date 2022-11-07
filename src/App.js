const { Console } = require('@woowacourse/mission-utils');
const COMPUTER = require('./Answer');

class App {
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.readLine();
  }

  print(msg) {
    Console.print(msg);
  }

  readLine() {
    Console.readLine(`숫자를 입력해주세요 : `, (input) => {
      const USER_INPUT = input.split('').map((number) => number * 1);
      let countBall = 0;
      let countStrike = 0;

      if (typeof USER_INPUT !== `number` && USER_INPUT.length !== 3) {
        throw new Error('3자리 숫자만 입력해주세요!');
      }

      for (let i = 0; i < COMPUTER.length; i += 1) {
        for (let j = 0; j < USER_INPUT.length; j += 1) {
          if (COMPUTER[i] === USER_INPUT[j]) {
            countBall += 1;
          }
        }
      }
      COMPUTER.forEach((number, index) => {
        if (number === USER_INPUT[index]) {
          countStrike += 1;
        }
      });

      if (countBall === 0 && countStrike === 0) {
        this.print(`${COMPUTER} 낫싱`);
      }
      if (countBall === 0 && countStrike !== 0) {
        this.print(`${COMPUTER} ${countStrike}스트라이크`);
      }
      if (countBall !== 0 && countStrike === 0) {
        this.print(`${COMPUTER} ${countBall}볼`);
      }
      if (countBall !== 0 && countStrike !== 0) {
        this.print(`${COMPUTER} ${countBall}볼 ${countStrike}스트라이크`);
      }
    });
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
