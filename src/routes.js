const express = require('express');
const router =  express.Router();
const authMiddleware = require('./app/middlewares/auth');
const toolController = require('./app/controller/ToolController');
const userController =  require('./app/controller/UserController');

//Criação de Usuários
router.post('/register',userController.create);

//Autenticação de usuários
router.post('/authenticate', userController.auth);

//Chamada da autenticação 
router.use(authMiddleware);

//Listagem de ferramentas
router.get('/tools',toolController.index);

//Criação de ferramentas
router.post('/tools',toolController.create);

//Remover por id
router.delete('/tools/:id',toolController.deleteID);

module.exports = router;