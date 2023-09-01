# Meu primeiro servidor Node.js Express

Este projeto é um servidor Node.js simples usando o framework Express.

## Configuração

Certifique-se de ter o Node.js instalado. Você pode instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/).

## Instalação

1. Clone o repositório:

1. Instale as dependências:

```
npm install
```

## Uso

Execute o servidor usando o seguinte comando:

```
node server.js
```

O servidor estará disponível em [http://localhost:3003](http://localhost:3003).

## Rotas

- Rota principal:

GET /

```
Retorna a mensagem "Olá, Mundo!".
```

- Rota de cadastro:

GET /cadastrar/:id

```
Retorna uma mensagem de boas-vindas para o usuário com o ID fornecido.
```
