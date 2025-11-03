import { Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import InputValidator from '../validator/InputValidator.js';
import LottoMachine from '../domain/LottoMachine.js';
import WinningResult from '../domain/WinningResult.js';
import { LOTTO_CONSTANTS } from '../constants/LottoConstants.js';

class LottoController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async run() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const lottos = this.#purchaseLottos(purchaseAmount);
    
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);
    
    this.#printResult(lottos, winningNumbers, bonusNumber, purchaseAmount);
  }

  async #getPurchaseAmount() {
    while (true) {
      try {
        const input = await InputView.readPurchaseAmount();
        InputValidator.validatePurchaseAmount(input);
        return Number(input);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  #purchaseLottos(amount) {
    const count = this.#lottoMachine.calculateCount(amount);
    const lottos = this.#lottoMachine.generateLottos(count, this.#generateLottoNumbers);
    
    OutputView.printPurchaseCount(count);
    OutputView.printLottos(lottos);
    
    return lottos;
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.MIN_NUMBER,
      LOTTO_CONSTANTS.MAX_NUMBER,
      LOTTO_CONSTANTS.COUNT
    );
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const input = await InputView.readWinningNumbers();
        const numbers = InputView.parseWinningNumbers(input);
        InputValidator.validateWinningNumbers(numbers);
        return numbers;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  async #getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await InputView.readBonusNumber();
        const bonusNumber = Number(input);
        InputValidator.validateBonusNumber(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  #printResult(lottos, winningNumbers, bonusNumber, purchaseAmount) {
    const result = new WinningResult(winningNumbers, bonusNumber);
    result.calculateStatistics(lottos);
    
    const statistics = result.getStatistics();
    const profitRate = result.calculateProfitRate(purchaseAmount);
    
    OutputView.printStatistics(statistics, profitRate);
  }
}

export default LottoController;