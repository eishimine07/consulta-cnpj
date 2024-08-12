import CNAE from '@/models/cnae';
import Partner from '@/models/partner';

type Company = {
  cnpj: string
  dataDeAbertura: Date
  email: string
  endereçoCompleto: string
  naturezaJuridica: string
  nome: string
  razaoSocial: string
  situacao: string
  telefone: string
  atividadePrincipal: CNAE
  atividadesSecundarias: CNAE[]
  socios: Partner[]
};

export default Company;
