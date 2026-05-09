const calc = require('../calculator');

describe('Calculator - basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('compute() accepts operator aliases', () => {
    expect(calc.compute('+', 2, 3)).toBe(5);
    expect(calc.compute('add', 2, 3)).toBe(5);
    expect(calc.compute('-', 10, 4)).toBe(6);
    expect(calc.compute('*', 45, 2)).toBe(90);
    expect(calc.compute('/', 20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.divide(1, 0)).toThrow(/Division by zero/);
    expect(() => calc.compute('/', 1, 0)).toThrow(/Division by zero/);
  });

  test('supports floating point numbers', () => {
    expect(calc.add(1.5, 2.3)).toBeCloseTo(3.8, 5);
    expect(calc.divide(7, 2)).toBeCloseTo(3.5, 5);
  });
});
