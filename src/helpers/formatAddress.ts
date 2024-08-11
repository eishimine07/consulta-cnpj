type Address = {
  city: string
  neighborhood: string
  number: string
  state: string
  street: string
  zipCode: string
};

export default function formatAddress(address: Address): string {
  return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipCode}`
}