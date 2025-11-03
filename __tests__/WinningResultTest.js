import WinningResult from '../src/domain/WinningResult.js';
import Lotto from '../src/Lotto.js';

describe('WinningResult 클래스 테스트', () => {
  describe('당첨 등수 판정', () => {
    test('6개 일치하면 1등이다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBe('FIRST');
    });

    test('5개 일치 + 보너스 일치하면 2등이다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBe('SECOND');
    });

    test('5개 일치하면 3등이다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBe('THIRD');
    });

    test('4개 일치하면 4등이다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 3, 4, 8, 9]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBe('FOURTH');
    });

    test('3개 일치하면 5등이다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBe('FIFTH');
    });

    test('2개 이하 일치하면 null을 반환한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
      const rank = result.getRank(lotto);
      
      expect(rank).toBeNull();
    });
  });

  describe('당첨 통계 계산', () => {
    test('여러 로또의 당첨 결과를 집계한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lottos = [
        new Lotto([1, 2, 3, 4, 5, 6]),   // 1등
        new Lotto([1, 2, 3, 8, 9, 10]),  // 5등
        new Lotto([7, 8, 9, 10, 11, 12]) // 낙첨
      ];
      
      result.calculateStatistics(lottos);
      const statistics = result.getStatistics();
      
      expect(statistics.FIRST).toBe(1);
      expect(statistics.FIFTH).toBe(1);
      expect(statistics.SECOND).toBe(0);
    });

    test('총 당첨 금액을 계산한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lottos = [
        new Lotto([1, 2, 3, 8, 9, 10]),  // 5등 - 5,000원
        new Lotto([1, 2, 3, 4, 8, 9])    // 4등 - 50,000원
      ];
      
      result.calculateStatistics(lottos);
      
      expect(result.getTotalPrize()).toBe(55000);
    });
  });

  describe('수익률 계산', () => {
    test('수익률을 소수점 첫째 자리에서 반올림하여 계산한다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lottos = [
        new Lotto([1, 2, 3, 8, 9, 10]),  // 5등 - 5,000원
      ];
      
      result.calculateStatistics(lottos);
      const profitRate = result.calculateProfitRate(8000);
      
      expect(profitRate).toBe(62.5);
    });

    test('수익이 없으면 0%다', () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const result = new WinningResult(winningNumbers, bonusNumber);
      
      const lottos = [
        new Lotto([7, 8, 9, 10, 11, 12])
      ];
      
      result.calculateStatistics(lottos);
      const profitRate = result.calculateProfitRate(1000);
      
      expect(profitRate).toBe(0);
    });
  });
});