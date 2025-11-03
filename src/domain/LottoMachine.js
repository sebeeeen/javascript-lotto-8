import Lotto from '../Lotto.js';
import { LOTTO_CONSTANTS } from '../constants/LottoConstants.js';

class LottoMachine {
  calculateCount(amount) {
    return amount / LOTTO_CONSTANTS.PRICE;
  }

  generateLottos(count, generator) {
    return Array.from({ length: count }, () => {
      const numbers = generator();
      return new Lotto(numbers);
    });
  }
}

export default LottoMachine;