import formatAddress from './formatAddress';

describe('formatAddress', () => {
  it('should format the address correctly without complement', () => {
    const address = {
      city: 'São Paulo',
      complement: '',
      neighborhood: 'Centro',
      number: '123',
      state: 'SP',
      street: 'Rua das Flores',
      zipCode: '01001-000',
    };

    const formattedAddress = formatAddress(address);

    expect(formattedAddress).toBe('Rua das Flores, 123 - Centro, São Paulo - SP, 01001-000');
  });

  it('should format the address correctly with complement', () => {
    const address = {
      city: 'Rio de Janeiro',
      complement: 'Apt 101',
      neighborhood: 'Copacabana',
      number: '456',
      state: 'RJ',
      street: 'Av. Atlântica',
      zipCode: '22070-000',
    };

    const formattedAddress = formatAddress(address);

    expect(formattedAddress).toBe('Av. Atlântica, 456, Apt 101 - Copacabana, Rio de Janeiro - RJ, 22070-000');
  });

  it('should handle missing or empty fields gracefully', () => {
    const address = {
      city: 'Curitiba',
      complement: '',
      neighborhood: '',
      number: '',
      state: 'PR',
      street: '',
      zipCode: '',
    };

    const formattedAddress = formatAddress(address);

    expect(formattedAddress).toBe(',  - , Curitiba - PR, ');
  });
});
