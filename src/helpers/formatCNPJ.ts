import getDigitsOnly from '@/helpers/getDigitsOnly';

export default function formatCNPJ(cnpj: string): string {
  return getDigitsOnly(cnpj).replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}
