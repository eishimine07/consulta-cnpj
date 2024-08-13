import validCNPJ from './validCNPJ';

describe('validCNPJ', () => {
  it.each([
    ['08.286.476/0001-42'],
    ['75172090000105'],
  ])('when cnpj is %s should return true', (cnpj) => {
    expect(validCNPJ(cnpj)).toBeTruthy();
  });

  it.each([
    ['08.286.476/0001-41'],
    ['75172090000104'],
  ])('when cnpj is %s should return false', (cnpj) => {
    expect(validCNPJ(cnpj)).toBeFalsy();
  });
});
