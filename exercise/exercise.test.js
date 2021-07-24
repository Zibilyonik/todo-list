const {
  stringLength, reverseString, Calc, capitalizeString,
} = require('./exercise.js');

it('checks stringLength functionality', () => {
  const string = 'test';
  const num = stringLength(string);
  expect(num).toBe(string.length);
});

it('checks reverseString functionality', () => {
  const string = 'test';
  const reverse = reverseString(string);
  expect(reverse).toBe('tset');
});

describe('checks Calc class', () => {
  const boi = new Calc(160, 20);
  it('checks for add', () => {
    expect(boi.add()).toBe(180);
  });
  it('checks for subtract', () => {
    expect(boi.subtract()).toBe(140);
  });
  it('checks for divide', () => {
    expect(boi.divide()).toBe(8);
  });
  it('checks for multiply', () => {
    expect(boi.multiply()).toBe(3200);
  });
});

it('checks capitalizeString functionality', () => {
  const string = 'test';
  expect(capitalizeString(string)).toBe('Test');
});