import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async readPurchaseAmount() {
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static async readWinningNumbers() {
    return await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  static async readBonusNumber() {
    return await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }

  static parseWinningNumbers(input) {
    return input.split(',').map(num => Number(num.trim()));
  }
}

export default InputView;