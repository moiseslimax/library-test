const routes = require('express').Router()

//Rotas
const getUserData = require('./getUserData')
const removeUser = require('./removeUser')
const updateUserData = require('./updateUserData')

/**
 * @description Rota de consultar todos os Livros
 */
routes.get('/user', getUserData)

/**
 * @description Rota de remover livro
 */
routes.delete('/user', removeUser)

/**
 * @description Rota de atualizar/editar livro
 */
routes.put('/user', updateUserData)

module.exports = routes
