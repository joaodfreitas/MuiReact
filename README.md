# ExemploMuiReact - Lista de Usuários

Este projeto é uma aplicação React desenvolvida com Vite que exibe uma lista de usuários e seus detalhes, incluindo localização no mapa. A aplicação utiliza Material-UI para estilização e React Leaflet para exibição de mapas interativos.

## Funcionalidades

- Exibição de uma lista de usuários com informações básicas.
- Detalhamento de cada usuário, incluindo:
  - Nome completo.
  - E-mail.
  - Telefone.
  - Localização (cidade e país).
  - Mapa interativo com a localização do usuário.
- Suporte a temas utilizando Material-UI.
- Indicador de carregamento e tratamento de erros.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento de aplicações modernas.
- **Material-UI**: Biblioteca de componentes para estilização.
- **React Leaflet**: Biblioteca para integração de mapas interativos.
- **Leaflet**: Biblioteca para renderização de mapas.
- **React Router**: Gerenciamento de rotas na aplicação.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ExemploMuiReact.git
   cd ExemploMuiReact

npm install
# ou
yarn install

Estrutura do Projeto

src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas principais da aplicação
│   ├── Home.jsx      # Página inicial com a lista de usuários
│   ├── Details.jsx   # Página de detalhes do usuário
├── api/              # Funções para chamadas à API
├── App.jsx           # Componente principal
├── main.jsx          # Ponto de entrada da aplicação
