import InputValidator from '/src/validator/InputValidator.js';

describe('InputValidator 클래스 테스트', () => {
  describe('구입 금액 검증', () => {
    test('숫자가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('abc');
      }).toThrow('[ERROR]');
    });

    test('1000원 단위가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('1500');
      }).toThrow('[ERROR]');
    });

    test('0원이면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('0');
      }).toThrow('[ERROR]');
    });

    test('음수이면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('-1000');
      }).toThrow('[ERROR]');
    });

    test('유효한 금액은 예외가 발생하지 않는다', () => {
      expect(() => {
        InputValidator.validatePurchaseAmount('8000');
      }).not.toThrow();
    });
  });

  describe('당첨 번호 검증', () => {
    test('6개가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5]);
      }).toThrow('[ERROR]');
    });

    test('중복된 번호가 있으면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });

    test('1~45 범위가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([0, 1, 2, 3, 4, 5]);
      }).toThrow('[ERROR]');
    });

    test('숫자가 아닌 값이 있으면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5, 'a']);
      }).toThrow('[ERROR]');
    });

    test('유효한 당첨 번호는 예외가 발생하지 않는다', () => {
      expect(() => {
        InputValidator.validateWinningNumbers([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe('보너스 번호 검증', () => {
    test('1~45 범위가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
      }).toThrow('[ERROR]');
    });

    test('당첨 번호와 중복되면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateBonusNumber(6, [1, 2, 3, 4, 5, 6]);
      }).toThrow('[ERROR]');
    });

    test('숫자가 아니면 예외가 발생한다', () => {
      expect(() => {
        InputValidator.validateBonusNumber('a', [1, 2, 3, 4, 5, 6]);
      }).toThrow('[ERROR]');
    });

    test('유효한 보너스 번호는 예외가 발생하지 않는다', () => {
      expect(() => {
        InputValidator.validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });
});