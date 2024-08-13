import { HttpStatusCode } from 'axios';
import getCompanyByCNPJ from './getCompanyByCNPJ';
import Company from '@/models/company';
import api, { getErrorResponse } from '@/services/api';
import CompanyDTO from '@/services/company/companyDTO';

vi.mock('@/services/api', async (importOriginal) => {
  const mod = await importOriginal<typeof import('@/services/api')>()
  
  return {
    ...mod,
    getErrorResponse: vi.fn(),
    default: { get: vi.fn() },
  }
});

describe('getCompanyByCNPJ', () => {
  const cnpj = '12.345.678/0001-95';
  const cleanedCNPJ = '12345678000195';
  const mockCompanyDTO: CompanyDTO = {
    cnae_fiscal: 1,
    cnae_fiscal_descricao: 'cnae_fiscal_descricao',
    cnaes_secundarios: [],
    cnpj: cleanedCNPJ,
    data_inicio_atividade: '2024-08-12',
    email: 'email',
    municipio: 'municipio',
    complemento: 'complemento',
    bairro: 'bairro',
    numero: 'numero',
    uf: 'uf',
    descricao_tipo_de_logradouro: 'descricao_tipo_de_logradouro',
    logradouro: 'logradouro',
    cep: 12345678,
    natureza_juridica: 'natureza_juridica',
    nome_fantasia: 'nome_fantasia',
    razao_social: 'razao_social',
    descricao_situacao_cadastral: 'descricao_situacao_cadastral',
    ddd_telefone_1: 'ddd_telefone_1',
    qsa: [
      {
        identificador_de_socio: 3,
        nome_socio: 'nome_socio',
        cnpj_cpf_do_socio: 'cnpj_cpf_do_socio',
        qualificacao_socio: 'qualificacao_socio',
        codigo_qualificacao_socio: 4,
        percentual_capital_social: 5,
        data_entrada_sociedade: '2024-08-12'
      },
    ],
    identificador_matriz_filial: 0,
    descricao_matriz_filial: '',
    situacao_cadastral: 0,
    data_situacao_cadastral: '',
    motivo_situacao_cadastral: 0,
    codigo_natureza_juridica: 0,
    codigo_municipio: 0,
    ddd_fax: '',
    qualificacao_do_responsavel: 0,
    capital_social: 0,
    porte: 0,
    descricao_porte: '',
    opcao_pelo_simples: false,
    opcao_pelo_mei: false
  };
  const mockCompany: Company = {                                                                                                                                                                         
    atividadePrincipal: { codigo: 1, descricao: 'cnae_fiscal_descricao' },                                                                                                  
    atividadesSecundarias: [],                                                                                                                                              
    cnpj: '12345678000195',                                                                                                                                                 
    dataDeAbertura: new Date('2024-08-12'),                                                                                                                               
    email: 'email',                                                                                                                                                         
    enderecoCompleto: 'descricao_tipo_de_logradouro logradouro, numero, complemento - bairro, municipio - uf, 12345678',
    naturezaJuridica: 'natureza_juridica',
    nome: 'nome_fantasia',
    razaoSocial: 'razao_social',
    situacao: 'descricao_situacao_cadastral',
    telefone: 'ddd_telefone_1',
    socios: [
      { nome: 'nome_socio', qualificacao: 'qualificacao_socio' },
    ],
  };

  afterEach(() => {
    vi.restoreAllMocks();
  })

  it('should return a Company object when the API call is successful', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({ data: mockCompanyDTO });

    const result = await getCompanyByCNPJ(cnpj);

    expect(api.get).toHaveBeenCalledWith(`cnpj/v1/${cleanedCNPJ}`);
    expect(result).toEqual(mockCompany);
  });

  it('should return null when the API response has no data', async () => {
    vi.mocked(api.get).mockResolvedValueOnce({ data: null });

    const result = await getCompanyByCNPJ(cnpj);

    expect(api.get).toHaveBeenCalledWith(`cnpj/v1/${cleanedCNPJ}`);
    expect(result).toBeNull();
  });

  it('should return an error message when the API call fails', async () => {
    const errorMessage = 'Request failed';
    
    vi.mocked(api.get).mockRejectedValueOnce(new Error());
    vi.mocked(getErrorResponse).mockReturnValueOnce({ error: errorMessage, status: HttpStatusCode.InternalServerError });

    const result = await getCompanyByCNPJ(cnpj);

    expect(api.get).toHaveBeenCalledWith(`cnpj/v1/${cleanedCNPJ}`);
    expect(result).toBe(errorMessage);
  });

  it('should return null when the API call fails and no error message is provided', async () => {
    vi.mocked(api.get).mockRejectedValueOnce(new Error());
    vi.mocked(getErrorResponse).mockReturnValueOnce({ status: HttpStatusCode.InternalServerError });

    const result = await getCompanyByCNPJ(cnpj);

    expect(api.get).toHaveBeenCalledWith(`cnpj/v1/${cleanedCNPJ}`);
    expect(result).toBeNull();
  });
});
