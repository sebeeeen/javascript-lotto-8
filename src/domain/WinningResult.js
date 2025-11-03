import { RANK, RANK_ORDER } from '../constants/LottoConstants.js';

class WinningResult {
  #winningNumbers;
  #bonusNumber;
  #statistics;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#statistics = this.#initializeStatistics();
  }

  #initializeStatistics() {
    return {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  getRank(lotto) {
    const matchCount = lotto.countMatches(this.#winningNumbers);
    const hasBonus = lotto.hasBonus(this.#bonusNumber);

    return this.#determineRank(matchCount, hasBonus);
  }

  #determineRank(matchCount, hasBonus) {
    if (matchCount === 6) {
      return 'FIRST';
    }
    if (matchCount === 5 && hasBonus) {
      return 'SECOND';
    }
    if (matchCount === 5) {
      return 'THIRD';
    }
    if (matchCount === 4) {
      return 'FOURTH';
    }
    if (matchCount === 3) {
      return 'FIFTH';
    }
    return null;
  }

  calculateStatistics(lottos) {
    lottos.forEach(lotto => {
      const rank = this.getRank(lotto);
      if (rank) {
        this.#statistics[rank]++;
      }
    });
  }

  getStatistics() {
    return { ...this.#statistics };
  }

  getTotalPrize() {
    return RANK_ORDER.reduce((total, rankKey) => {
      return total + (this.#statistics[rankKey] * RANK[rankKey].prize);
    }, 0);
  }

  calculateProfitRate(purchaseAmount) {
    const totalPrize = this.getTotalPrize();
    if (totalPrize === 0) {
      return 0;
    }
    return Math.round((totalPrize / purchaseAmount) * 1000) / 10;
  }
}

export default WinningResult;