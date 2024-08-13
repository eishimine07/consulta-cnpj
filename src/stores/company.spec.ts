import { setActivePinia, createPinia } from 'pinia';
import Company from '@/models/company';
import getCompanyByCNPJ from '@/services/company/getCompanyByCNPJ';
import useCompanyStore from '@/stores/company'; // ajusta o caminho conforme necessário

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`,
  }),
}));
vi.mock('@/services/company/getCompanyByCNPJ');

describe('useCompanyStore', () => {
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

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.restoreAllMocks();
  });

  it('should initialize with default values', () => {
    const store = useCompanyStore();
    
    expect(store.company).toBeNull();
    expect(store.errorMessage).toBe('');
    expect(store.isLoading).toBe(false);
    expect(store.dirty).toBe(false);
  });

  it('should set company and reset error message on successful fetch', async () => {
    vi.mocked(getCompanyByCNPJ).mockResolvedValueOnce(mockCompany);

    const store = useCompanyStore();

    await store.fetchCompany('12345678901234');

    expect(getCompanyByCNPJ).toHaveBeenCalledWith('12345678901234');
    expect(store.isLoading).toBe(false);
    expect(store.company).toEqual(mockCompany);
    expect(store.errorMessage).toBe('');
  });

  it('should set error message if company is not found', async () => {
    vi.mocked(getCompanyByCNPJ).mockResolvedValueOnce(null);

    const store = useCompanyStore();
    await store.fetchCompany('12345678901234');

    expect(getCompanyByCNPJ).toHaveBeenCalledWith('12345678901234');
    expect(store.isLoading).toBe(false);
    expect(store.company).toBeNull();
    expect(store.errorMessage).toBe('error.companyNotFound');
  });

  it('should handle error response from getCompanyByCNPJ', async () => {
    const errorMessage = 'Error occurred';

    vi.mocked(getCompanyByCNPJ).mockResolvedValueOnce(errorMessage);

    const store = useCompanyStore();
    await store.fetchCompany('12345678901234');

    expect(store.isLoading).toBe(false);
    expect(store.company).toBeNull();
    expect(store.errorMessage).toBe(errorMessage);
  });
});
