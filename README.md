# Consulta CNPJ
## Índice
- [Descrição](#descrição)
- [Tech Stack](#tech-stack)
- [Rodando o projeto](#rodando-o-projeto)
- [Rodando os testes](#rodando-os-testes)

## Descrição
Tela para consultar informações de empresas a partir do CNPJ. O projeto usa a API da BrasilAPI para buscar as informações.

## Tech Stack
- Vue 3
- Vite
- Pinia
- Typescript
- Vitest
- Vuetify
- Vue I18n
- Axios

## Rodando o projeto
Faça uma cópia do arquivo `.env.example` (já contém os valores default) e troque o nome `.env.local`

Instalando as dependências
```bash
npm install
```

Iniciando o server
```bash
npm run dev
```

## Rodando os testes
Para rodar todos os testes
```bash
npm run test
```

Para rodar algum teste específico
```bash
npm run test NOME_DO_ARQUIVO_TESTE
```
