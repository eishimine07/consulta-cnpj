import formatAddress from '@/helpers/formatAddress';
import getDigitsOnly from '@/helpers/getDigitsOnly';
import Company from '@/models/company';
import api, { getErrorResponse } from '@/services/api';
import CompanyDTO from '@/services/company/companyDTO';

function toModel(dto: CompanyDTO): Company {
  return {
    atividadePrincipal: `${dto.cnae_fiscal} - ${dto.cnae_fiscal_descricao}`,
    cnpj: dto.cnpj,
    dataDeAbertura: new Date(dto.data_inicio_atividade),
    email: dto.email,
    endereçoCompleto: formatAddress({
      city: dto.municipio,
      neighborhood: dto.bairro,
      number: dto.numero,
      state: dto.uf,
      street: `${dto.descricao_tipo_de_logradouro} ${dto.logradouro}`,
      zipCode: `${dto.cep}`,
    }),
    nome: dto.nome_fantasia,
    razaoSocial: dto.razao_social,
    situacao: dto.descricao_situacao_cadastral,
    telefone: dto.ddd_telefone_1,
  };
}

export default async function getCompanyByCNPJ(cnpj: string): Promise<Company | string | null> {
  try {
    // Doc - https://brasilapi.com.br/docs#tag/CNPJ
    const response = await api.get<CompanyDTO>(`cnpj/v1/${getDigitsOnly(cnpj)}`)

    if (!response.data) {
      return null;
    }

    return toModel(response.data);
  } catch (error) {
    return getErrorResponse(error).error ?? null;
  }
}