# FILMIX

https://github.com/DevZank/BuscaFilmes_React/assets/111926496/08852751-bca9-4931-9a28-4e72dafc472a

FILMIX é uma aplicação web que permite aos usuários buscar por filmes e visualizar o nome do filme junto com a capa. A aplicação utiliza a API do OMDB (Open Movie Database) para obter as informações dos filmes.

## Funcionalidades

- Busca de filmes por título.
- Exibição do nome do filme.
- Exibição da capa do filme.

## Tecnologias Utilizadas

- HTML5
- CSS3
- React.JS
- API OMDB

## Como Utilizar

1. Clone este repositório para a sua máquina local.
   ```bash
   git clone https://github.com/seu-usuario/filmix.git

2. Navegue até o diretório do projeto.
   ```bash
   cd filmix
   npm install
   npm run dev

---

# API OMDB
A aplicação utiliza a [API OMDB](http://www.omdbapi.com/) para buscar informações sobre os filmes. Para utilizar a API, você precisará de uma chave de API. Siga os passos abaixo para obter sua chave de API:

1. Acesse [OMDB API](http://www.omdbapi.com/apikey.aspx).
2. Solicite sua chave de API gratuita.
3. Atualize o arquivo JavaScript da aplicação para incluir sua chave de API.
   ```javascript
   const response = await fetch(
     `http://www.omdbapi.com/?s=${query}&apikey=SUA_API_KEY`
   );

---

## Contato

Sinta-se à vontade para entrar em contato comigo.

---

Feito por [Isaac Martins](https://www.linkedin.com/in/isaacmjsilva/)
