export default function getDigitsOnly(value: string): string {
  return value.replace(/[^\d]+/g, '');
}
