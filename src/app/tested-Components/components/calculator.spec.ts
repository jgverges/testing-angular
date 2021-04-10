import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('add',()=>{
    let calculator = new Calculator();
    expect(calculator.add(2,2)).toEqual(4);
    expect(calculator.add(2,0)).toBeGreaterThan(1);
    expect(calculator.add(0,0)).toBeLessThan(1);
  })
});
