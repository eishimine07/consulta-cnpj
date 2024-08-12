type Address = {
  city: string
  complement?: string
  neighborhood: string
  number: string
  state: string
  street: string
  zipCode: string
};

export default function formatAddress(address: Address): string {
  const { city, complement, neighborhood, number, state, street, zipCode } = address;

  return `${street}, ${number}${complement ? `, ${complement}` : ''} - ${neighborhood}, ${city} - ${state}, ${zipCode}`;
}