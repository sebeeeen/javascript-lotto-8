import { Console } from '@woowacourse/mission-utils';
import { RANK, RANK_ORDER } from '../constants/LottoConstants.js';

class OutputView {
  static printPurchaseCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  }

  static printLottos(lottos) {
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static printStatistics(statistics, profitRate) {
    Console.print('\n당첨 통계');
    Console.print('---');
    
    RANK_ORDER.forEach(rankKey => {
      const rank = RANK[rankKey];
      const count = statistics[rankKey];
      Console.print(`${rank.message} - ${count}개`);
    });
    
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;