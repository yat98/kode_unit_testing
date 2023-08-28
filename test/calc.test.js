import calc from '../src/calculator/calc.js';

describe('Add Function', () => {
  it('should sum of 1 and 3 is 4', () => {
    const actual = calc.add(1, 3);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('should sum of 15 and string "31" is 46', () => {
    const actual = calc.add(15, "31");
    const expected = 46;
    expect(actual).toBe(expected);
  });

  it('should sum of 3 and string "name" is false', () => {
    const actual = calc.add(3, "name");
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should sum decimal with integer 3.14 + 10 = 13.14', () => {
    const actual = calc.add(3.14, 10);
    const expected = 13.14;
    expect(actual).toBe(expected);
  });
});

describe('Substract Function', () => {
  it('should substract of 5 and 3 is 2', () => {
    const actual = calc.sub(5, 3);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  it('should substract of 15 and string "31" is -16', () => {
    const actual = calc.sub(15, "31");
    const expected = -16;
    expect(actual).toBe(expected);
  });

  it('should substract of 3 and string "name" is false', () => {
    const actual = calc.sub(3, "name");
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should substract decimal with integer 10 - 3.14 = 6.86', () => {
    const actual = calc.sub(10, 3.14);
    const expected = 6.86;
    expect(actual).toBe(expected);
  });
});

describe('Division Function', () => {
  it('should divide of 6 and 2 is 4', () => {
    const actual = calc.div(6, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it('should divide of 15 and string "3" is 5', () => {
    const actual = calc.div(15, "3");
    const expected = 5;
    expect(actual).toBe(expected);
  });

  it('should divide of 3 and string "name" is false', () => {
    const actual = calc.div(3, "name");
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should divide decimal with integer 10 / 3.14 = 3.19', () => {
    const actual = calc.div(10, 3.14);
    const expected = 3.18;
    expect(actual).toBe(expected);
  });
});

describe('Multiply Function', () => {
  it('should multiply of 12 and 12 is 144', () => {
    const actual = calc.mul(12, 12);
    const expected = 144;
    expect(actual).toBe(expected);
  });

  it('should multiply of 15 and string "3" is 45', () => {
    const actual = calc.mul(15, "3");
    const expected = 45;
    expect(actual).toBe(expected);
  });

  it('should multiply of 3 and string "name" is false', () => {
    const actual = calc.mul(3, "name");
    const expected = false;
    expect(actual).toBe(expected);
  });

  it('should multiply decimal with integer 10 * 3.14 = 31.4', () => {
    const actual = calc.mul(10, 3.14);
    const expected = 31.4;
    expect(actual).toBe(expected);
  });
});