const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando a api
const app = express();

//Aceitar solicitações em JSON
app.use(express.json());

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/dbvuttr',{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true
});
mongoose.set('useFindAndModify', false);

//Configurar para usar  models
requireDir('./model');

//configurar para usar rotas
app.use('/', require('./routes'));

//Ouvir a porta 3000
const port = process.env.PORT || 3000;
app.listen(port);
