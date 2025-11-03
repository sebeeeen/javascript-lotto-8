import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  describe("로또 번호 검증", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호가 1보다 작으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([0, 1, 2, 3, 4, 5]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호가 45보다 크면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46]);
      }).toThrow("[ERROR]");
    });

    test("유효한 로또 번호는 예외가 발생하지 않는다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe("로또 번호 조회", () => {
    test("로또 번호를 오름차순 정렬하여 반환한다.", () => {
      const lotto = new Lotto([6, 3, 1, 5, 2, 4]);
      
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("이미 정렬된 번호도 올바르게 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("당첨 번호와 일치 개수 확인", () => {
    test("일치하는 번호가 없으면 0을 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = [7, 8, 9, 10, 11, 12];
      
      expect(lotto.countMatches(winningNumbers)).toBe(0);
    });

    test("일치하는 번호가 3개면 3을 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = [1, 2, 3, 7, 8, 9];
      
      expect(lotto.countMatches(winningNumbers)).toBe(3);
    });

    test("모든 번호가 일치하면 6을 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      
      expect(lotto.countMatches(winningNumbers)).toBe(6);
    });
  });

  describe("보너스 번호 일치 확인", () => {
    test("보너스 번호가 포함되어 있으면 true를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      expect(lotto.hasBonus(6)).toBe(true);
    });

    test("보너스 번호가 포함되어 있지 않으면 false를 반환한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      expect(lotto.hasBonus(7)).toBe(false);
    });
  });
});