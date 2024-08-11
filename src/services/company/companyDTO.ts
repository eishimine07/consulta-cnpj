type CnaesSecundarios = {
  codigo: number
  descricao: string
}[];

type QSA = {
  identificador_de_socio: number
  nome_socio: string
  cnpj_cpf_do_socio: string
  codigo_qualificacao_socio: number
  percentual_capital_social: number
  data_entrada_sociedade: string // Date
  cpf_representante_legal?: string
  nome_representante_legal?: string
  codigo_qualificacao_representante_legal?: string
}[]

type CompanyDTO = {
  cnpj: string
  identificador_matriz_filial: number
  descricao_matriz_filial: string
  razao_social: string
  nome_fantasia: string
  situacao_cadastral: number
  descricao_situacao_cadastral: string
  data_situacao_cadastral: string // Date
  motivo_situacao_cadastral: number
  nome_cidade_exterior?: string
  codigo_natureza_juridica: number
  data_inicio_atividade: string // Date
  cnae_fiscal: number
  cnae_fiscal_descricao: string
  descricao_tipo_de_logradouro: string
  logradouro: string
  numero: string
  complemento: string
  bairro: string
  cep: number
  uf: string
  codigo_municipio: number
  municipio: string
  ddd_telefone_1: string
  ddd_telefone_2?: string
  ddd_fax: string
  email: string
  qualificacao_do_responsavel: number
  capital_social: number
  porte: number
  descricao_porte: string
  opcao_pelo_simples: boolean
  data_opcao_pelo_simples?: string
  data_exclusao_do_simples?: string
  opcao_pelo_mei: boolean
  situacao_especial?: string
  data_situacao_especial?: string
  cnaes_secundarios: CnaesSecundarios
  qsa: QSA
};

export default CompanyDTO;