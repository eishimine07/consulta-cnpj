import getDigitsOnly from './getDigitsOnly';

describe('getDigitsOnly', () => {
  it.each([
    ['123123', '123123'],
    ['1d 23-test_123', '123123'],
    ['   ', ''],
    ['test', ''],
  ])('when value is %s should return %s', (value, expected) => {
    expect(getDigitsOnly(value)).toBe(expected);
  });
});
