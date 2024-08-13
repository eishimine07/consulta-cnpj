import formatCNPJ from './formatCNPJ';

describe('formatCNPJ', () => {
  it('should format a CNPJ correctly', () => {
    const cnpj = '12345678000195';

    const formattedCNPJ = formatCNPJ(cnpj);

    expect(formattedCNPJ).toBe('12.345.678/0001-95');
  });

  it('should handle CNPJ with non-numeric characters', () => {
    const cnpj = '12a45678b00c00195';

    const formattedCNPJ = formatCNPJ(cnpj);

    expect(formattedCNPJ).toBe('12.456.780/0001-95');
  });

  it('should return the original value when CNPJ is not 14 digits', () => {
    const cnpj = '1234567';

    const formattedCNPJ = formatCNPJ(cnpj);

    expect(formattedCNPJ).toBe(cnpj);
  });
});
