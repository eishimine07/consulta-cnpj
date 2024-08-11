import getDigitsOnly from '@/helpers/getDigitsOnly';

function validateCheckDigits(digitsOnly: string): boolean {
  let numbers = digitsOnly.substring(0, 12);
  const checkDigits = digitsOnly.substring(12);

  let sum = 0;
  let factor = 5;

  for (let i = 12; i >= 1; i -= 1) {
    sum += parseInt(numbers[12 - i], 10) * factor;
    factor -= 1;

    if (factor < 2) factor = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(checkDigits[0], 10)) {
    return false;
  }

  numbers = digitsOnly.substring(0, 13);
  sum = 0;
  factor = 6;
  for (let j = 13; j >= 1; j -= 1) {
    sum += parseInt(numbers[13 - j], 10) * factor;
    factor -= 1;

    if (factor < 2) {
      factor = 9;
    }
  }
  
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(checkDigits[1], 10)) {
    return false;
  }

  return true;
}

export default function validCNPJ(cnpj: string) {
  if (!cnpj) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  const digitsOnly = getDigitsOnly(cnpj);

  if (digitsOnly.length !== 14) {
    return false;
  }

  return validateCheckDigits(digitsOnly);
}
