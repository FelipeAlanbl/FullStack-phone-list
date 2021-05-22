const { response } = require('express')
const Contato = require('../model/contato')

exports.buscarUm = (request, response, next) => {
    const id = request.params. id
    
    Contato.findByPk(id)
        .then(contato => {
            if (contato) {
                response.send(contato)
            } else {
                response.status(404).send()
            }
        })
        .catch(error => next(error))
}

exports.buscarTodos = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0)
    let pagina = parseInt(request.query.pagina || 0)

    if(!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(400).send()
    }

    const ITENS_POR_PAGINA = 10

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite
    pagina = pagina <= 0 ? 0 : pagina * limite

    Contato.findAll({ limit: limite, offset: pagina})
        .then(contatos => {
            response.send(contatos)
        })
        .catch(error => next(error))
}

exports.criar = (request, response, next) => {
    const nome = request.body.nome
    const telefone = request.body.telefone

    Contato.create({
        nome: nome,
        telefone: telefone
    })
    .then( () => {
        response.status(201).send();
    })
}

exports.atualizar = (request, response, next) => {
    const id = request.params.id;

    const nome = request.body.nome
    const telefone = request.body.telefone

    Contato.findByPk(id)
        .then(contato => {
            if(contato) {
                Contato.update(
                    {
                        nome: nome,
                        telefone: telefone
                    },
                    { where: { id: id } }
                )
                .then( () => {
                    response.send();
                })
                .catch(error => next(error))
            } else {
                response.status(404).send()
            }
        })
        .catch(error => next(error))
}

exports.excluir = (request, response, next) => {
    const id = request.params.id;

    Contato.findByPk(id)
        .then( contato => {
            if ( contato ) {
                Contato.destroy({
                    where: {id: id}
                })
                .then( () => {
                    response.send()
                })
                .catch(error => next(error))
            } else {
                response.status(404).send()
            }
        })
        .catch(error => next(error))

}