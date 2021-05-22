const express = require('express')
const controller = require('../controller/contato')

const router = express.Router();

router.get('/contatos/:id', controller.buscarUm)

router.get('/contatos', controller.buscarTodos)

router.post('/contatos', controller.criar)

router.put('/contatos/:id', controller.atualizar)

router.delete('/contatos/:id', controller.excluir)

module.exports = router