import LottoMachine from '../src/domain/LottoMachine';

describe('LottoMachine 클래스 테스트', () => {
  test('구입 금액으로 로또 개수를 계산한다', () => {
    const machine = new LottoMachine();
    
    expect(machine.calculateCount(8000)).toBe(8);
    expect(machine.calculateCount(1000)).toBe(1);
    expect(machine.calculateCount(14000)).toBe(14);
  });

  test('지정된 개수만큼 로또를 발행한다', () => {
    const machine = new LottoMachine();
    const mockGenerator = () => [1, 2, 3, 4, 5, 6];
    
    const lottos = machine.generateLottos(3, mockGenerator);
    
    expect(lottos).toHaveLength(3);
  });

  test('각 로또는 Lotto 인스턴스다', () => {
    const machine = new LottoMachine();
    const mockGenerator = () => [1, 2, 3, 4, 5, 6];
    
    const lottos = machine.generateLottos(1, mockGenerator);
    
    expect(lottos[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('생성기 함수가 여러 번 호출된다', () => {
    const machine = new LottoMachine();
    let callCount = 0;
    const mockGenerator = () => {
      callCount++;
      return [1, 2, 3, 4, 5, 6];
    };
    
    machine.generateLottos(5, mockGenerator);
    
    expect(callCount).toBe(5);
  });
});