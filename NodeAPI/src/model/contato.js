const Sequelize = require('sequelize')
const sequelize = require('../database/database')

const Contato = sequelize.define('contato', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
            len: [2, 15]
        }
    }
})

module.exports = Contato