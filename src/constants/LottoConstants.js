const LOTTO_CONSTANTS = {
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT: 6,
};

const RANK = {
  FIRST: {
    matchCount: 6,
    bonusMatch: false,
    prize: 2_000_000_000,
    message: '6개 일치 (2,000,000,000원)',
  },
  SECOND: {
    matchCount: 5,
    bonusMatch: true,
    prize: 30_000_000,
    message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  },
  THIRD: {
    matchCount: 5,
    bonusMatch: false,
    prize: 1_500_000,
    message: '5개 일치 (1,500,000원)',
  },
  FOURTH: {
    matchCount: 4,
    bonusMatch: false,
    prize: 50_000,
    message: '4개 일치 (50,000원)',
  },
  FIFTH: {
    matchCount: 3,
    bonusMatch: false,
    prize: 5_000,
    message: '3개 일치 (5,000원)',
  },
};

const RANK_ORDER = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];

export { LOTTO_CONSTANTS, RANK, RANK_ORDER };