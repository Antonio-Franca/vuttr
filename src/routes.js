const express = require('express');
const router =  express.Router();
const toolController = require('./controller/ToolController');

//Listagem de ferramentas
router.get('/tools',toolController.index);

//Criação de ferramentas
router.post('/tools',toolController.create);

//Remover por id
router.delete('/tools/:id',toolController.deleteID);

module.exports = router;