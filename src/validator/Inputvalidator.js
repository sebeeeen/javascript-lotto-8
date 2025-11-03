import { LOTTO_CONSTANTS } from '/constants/Lottoconstants.js';

class InputValidator {
  static validatePurchaseAmount(input) {
    this.#validateIsNumber(input, '구입 금액');
    const amount = Number(input);
    this.#validatePositive(amount);
    this.#validateUnit(amount);
  }

  static #validateIsNumber(input, fieldName) {
    if (Number.isNaN(Number(input)) || input.trim() === '') {
      throw new Error(`[ERROR] ${fieldName}은 숫자여야 합니다.`);
    }
  }

  static #validatePositive(amount) {
    if (amount <= 0) {
      throw new Error('[ERROR] 구입 금액은 0보다 커야 합니다.');
    }
  }

  static #validateUnit(amount) {
    if (amount % LOTTO_CONSTANTS.PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  static validateWinningNumbers(numbers) {
    this.#validateArrayLength(numbers);
    this.#validateAllNumbers(numbers);
    this.#validateNoDuplicate(numbers);
    this.#validateNumberRange(numbers);
  }

  static #validateArrayLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANTS.COUNT) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  static #validateAllNumbers(numbers) {
    const hasNonNumber = numbers.some(num => typeof num !== 'number' || Number.isNaN(num));
    if (hasNonNumber) {
      throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
    }
  }

  static #validateNoDuplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
  }

  static #validateNumberRange(numbers) {
    const hasInvalidNumber = numbers.some(
      num => num < LOTTO_CONSTANTS.MIN_NUMBER || num > LOTTO_CONSTANTS.MAX_NUMBER
    );
    if (hasInvalidNumber) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.#validateIsSingleNumber(bonusNumber);
    this.#validateBonusRange(bonusNumber);
    this.#validateNotInWinningNumbers(bonusNumber, winningNumbers);
  }

  static #validateIsSingleNumber(bonusNumber) {
    if (typeof bonusNumber !== 'number' || Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
  }

  static #validateBonusRange(bonusNumber) {
    if (bonusNumber < LOTTO_CONSTANTS.MIN_NUMBER || bonusNumber > LOTTO_CONSTANTS.MAX_NUMBER) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  static #validateNotInWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default InputValidator;