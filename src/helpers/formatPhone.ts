import getDigitsOnly from '@/helpers/getDigitsOnly';

export default function formatPhone(phone: string): string {
  const phoneOnlyDigits = getDigitsOnly(phone);

  // Se o número for menor que 10 dígitos, retorna o valor original
  if (phoneOnlyDigits.length < 10 || phoneOnlyDigits.length > 11) {
      return phone;
  }

  const regex = phoneOnlyDigits.length === 11 ? /(\d{2})(\d{5})(\d{4})/ : /(\d{2})(\d{4})(\d{4})/;

  // Formata o número no padrão (XX) XXXXX-XXXX
  const formattedPhoneNumber = phoneOnlyDigits.replace(regex, '($1) $2-$3');

  return formattedPhoneNumber;
};
