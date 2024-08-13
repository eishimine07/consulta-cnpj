import formatPhone from './formatPhone';

describe('formatPhone', () => {
  it('should format an 11-digit phone number correctly', () => {
    const phone = '11987654321';
    const formattedPhone = formatPhone(phone);
    
    expect(formattedPhone).toBe('(11) 98765-4321');
  });

  it('should format a 10-digit phone number correctly', () => {
    const phone = '1187654321';
    const formattedPhone = formatPhone(phone);
    
    expect(formattedPhone).toBe('(11) 8765-4321');
  });

  it('should return the original phone number if it has less than 10 digits', () => {
    const phone = '9876543';
    const formattedPhone = formatPhone(phone);
    
    expect(formattedPhone).toBe('9876543');
  });

  it('should return the original phone number if it has more than 11 digits', () => {
    const phone = '119876543210';
    const formattedPhone = formatPhone(phone);
    
    expect(formattedPhone).toBe('119876543210');
  });
});
