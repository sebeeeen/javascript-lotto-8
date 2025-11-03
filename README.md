# 🎰 로또 게임

우아한테크코스 프리코스 3주차 미션 - 로또 발매기 구현

## 📌 기능 요구사항

- 로또 번호 범위: 1~45
- 1개 로또: 중복되지 않는 6개 숫자
- 당첨 번호: 중복되지 않는 6개 숫자 + 보너스 번호 1개
- 로또 1장 가격: 1,000원
- 당첨 기준:
  - 1등: 6개 일치 / 2,000,000,000원
  - 2등: 5개 + 보너스 일치 / 30,000,000원
  - 3등: 5개 일치 / 1,500,000원
  - 4등: 4개 일치 / 50,000원
  - 5등: 3개 일치 / 5,000원

## 🚀 기능 목록

### 1. Lotto 도메인 ✅
- ✅ 로또 번호 검증
  - ✅ 6개가 아니면 예외 발생
  - ✅ 중복된 숫자가 있으면 예외 발생
  - ✅ 1~45 범위가 아니면 예외 발생
- ✅ 로또 번호 정렬 기능
- ✅ 로또 번호 getter 제공
- ✅ 당첨 번호와 일치 개수 계산

### 2. 입력 검증 기능 ✅
- ✅ 구입 금액 검증
  - ✅ 숫자인지 확인
  - ✅ 1,000원 단위인지 확인
  - ✅ 양수인지 확인
- ✅ 당첨 번호 검증
  - ✅ 6개의 숫자인지 확인
  - ✅ 1~45 범위인지 확인
  - ✅ 중복이 없는지 확인
- ✅ 보너스 번호 검증
  - ✅ 1~45 범위인지 확인
  - ✅ 당첨 번호와 중복되지 않는지 확인

### 3. 로또 발행 기능 ✅
- ✅ 구입 금액으로 로또 개수 계산
- ✅ 지정된 개수만큼 로또 발행
- ✅ 각 로또는 1~45 범위의 중복되지 않는 6개 숫자

### 4. 당첨 통계 기능 ✅
- ✅ 각 로또의 당첨 등수 계산
  - ✅ 일치 개수 확인
  - ✅ 보너스 번호 일치 확인 (5개 일치 시)
- ✅ 등수별 당첨 개수 집계
- ✅ 총 당첨 금액 계산
- ✅ 수익률 계산 (소수점 둘째 자리 반올림)

### 5. 입출력 기능 ✅
- ✅ 구입 금액 입력
- ✅ 당첨 번호 입력 (쉼표 구분)
- ✅ 보너스 번호 입력
- ✅ 발행한 로또 출력 (오름차순)
- ✅ 당첨 통계 출력
- ✅ 에러 발생 시 재입력

### 6. 테스트 코드 ✅
- ✅ Lotto 클래스 테스트 (10개)
- ✅ InputValidator 테스트 (16개)
- ✅ LottoMachine 테스트 (4개)
- ✅ WinningResult 테스트 (9개)
- ✅ ApplicationTest 통합 테스트

---

## 📂 프로젝트 구조

```
src/
├── Lotto.js                  # 로또 번호 도메인
├── App.js                    # 애플리케이션 시작점
├── index.js                  # 실행 진입점
├── domain/
│   ├── LottoMachine.js       # 로또 발행기
│   └── WinningResult.js      # 당첨 결과 통계
├── constants/
│   └── LottoConstants.js     # 로또 관련 상수
├── validator/
│   └── InputValidator.js     # 입력 검증
├── controller/
│   └── LottoController.js    # 게임 흐름 제어
└── view/
    ├── InputView.js          # 입력 처리
    └── OutputView.js         # 출력 처리

__tests__/
├── LottoTest.js              # 10개 테스트
├── InputValidatorTest.js     # 16개 테스트
├── LottoMachineTest.js       # 4개 테스트
├── WinningResultTest.js      # 9개 테스트
└── ApplicationTest.js        # 통합 테스트
```

---

## 🧪 테스트 결과

| 테스트 파일 | 테스트 개수 | 상태 |
|------------|------------|------|
| LottoTest | 10 | ✅ |
| InputValidatorTest | 16 | ✅ |
| LottoMachineTest | 4 | ✅ |
| WinningResultTest | 9 | ✅ |
| ApplicationTest | 2 | ✅ |
| **Total** | **41** | **✅** |

---

## 🎯 프로그래밍 요구사항

- ✅ Node.js 22.19.0 이상
- ✅ indent depth 2 이하
- ✅ 3항 연산자 미사용
- ✅ 함수 길이 15라인 이하
- ✅ else 지양
- ✅ 단위 테스트 작성

---

## 💻 실행 방법

```bash
# 패키지 설치
npm install

# 프로그램 실행
npm start

# 테스트 실행
npm test
```

---

## 📝 실행 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

---

## 🔍 주요 구현 내용

### 1. TDD 적용
테스트 코드를 먼저 작성하고 구현하는 방식으로 진행하여 요구사항을 명확히 하고 리팩토링 시 안전성을 확보했습니다.

### 2. 도메인 중심 설계
- **Lotto**: 번호 관리 및 불변 객체
- **LottoMachine**: 로또 발행만 담당
- **WinningResult**: 당첨 통계 계산
- **InputValidator**: 모든 입력 검증 집중

### 3. 에러 재입력 처리
```javascript
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
```

### 4. Early Return으로 else 제거
```javascript
#determineRank(matchCount, hasBonus) {
  if (matchCount === 6) return 'FIRST';
  if (matchCount === 5 && hasBonus) return 'SECOND';
  if (matchCount === 5) return 'THIRD';
  if (matchCount === 4) return 'FOURTH';
  if (matchCount === 3) return 'FIFTH';
  return null;
}
```

### 5. 상수 객체화
```javascript
const RANK = {
  FIRST: {
    matchCount: 6,
    prize: 2_000_000_000,
    message: '6개 일치 (2,000,000,000원)',
  },
  // ...
};
```

---

## 📚 참고 자료

- [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Jest 공식 문서](https://jestjs.io/)