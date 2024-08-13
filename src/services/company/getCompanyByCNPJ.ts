import formatAddress from '@/helpers/formatAddress';
import getDigitsOnly from '@/helpers/getDigitsOnly';
import Company from '@/models/company';
import api, { getErrorResponse } from '@/services/api';
import CompanyDTO from '@/services/company/companyDTO';

function toModel(dto: CompanyDTO): Company {
  return {
    atividadePrincipal: { codigo: dto.cnae_fiscal, descricao: dto.cnae_fiscal_descricao },
    atividadesSecundarias: dto.cnaes_secundarios,
    cnpj: dto.cnpj,
    dataDeAbertura: new Date(dto.data_inicio_atividade),
    email: dto.email,
    enderecoCompleto: formatAddress({
      city: dto.municipio,
      complement: dto.complemento,
      neighborhood: dto.bairro,
      number: dto.numero,
      state: dto.uf,
      street: `${dto.descricao_tipo_de_logradouro} ${dto.logradouro}`,
      zipCode: `${dto.cep}`,
    }),
    naturezaJuridica: dto.natureza_juridica,
    nome: dto.nome_fantasia,
    razaoSocial: dto.razao_social,
    situacao: dto.descricao_situacao_cadastral,
    telefone: dto.ddd_telefone_1,
    socios: dto.qsa.map((s) => ({
      nome: s.nome_socio,
      qualificacao: s.qualificacao_socio,
    })),
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