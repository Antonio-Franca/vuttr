
## :rocket:  VUTTR

### Very Userful Tools to Remember. 
A aplicação é um simples repositório para gerenciar ferramentas 
com seus respectivos nomes, links, descrições e tags.

## FERRAMENTAS
O projeto foi desenvolvido usando as seguintes ferramentas:
-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [MongoDB](https://www.mongodb.com)
-  [Moongoose](https://mongoosejs.com)
-  [JSON web token](https://github.com/auth0/node-jsonwebtoken)
-  [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
-  [docker](https://www.docker.com/)
-  [Insomnia](https://insomnia.rest)

## Informações: como rodar a API
### Requerimentos
Para rodar a API, você precisará das seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.16.0 ou superior, [Yarn](https://yarnpkg.com/), [docker](https://www.docker.com/), [MongoDB](https://www.mongodb.com).
<br>

### Backend

Clone o repositório e instale as dependências
```bash
# para clonar o repositório:
git clone 

#vá para pasta onde está a API
cd vuttr

#Instale as dependências:
yarn ou npm install

```
Para conectar o banco de dados
```bash
# Inicializar o docker
docker start database

# Inicializar a API
yarn start ou npm run start 
```
