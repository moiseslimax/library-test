const routes = require('express').Router()

//Rotas
const getUserData = require('./getUserData')
const removeUser = require('./removeUser')
const updateUserData = require('./updateUserData')
const addFavoriteBook = require('./addFavoriteBook')

/**
 * @description Rota de consultar dados de usuario
 */
routes.get('/user', getUserData)

/**
 * @description Rota de remover usuario
 */
routes.delete('/user', removeUser)

/**
 * @description Rota de atualizar/ed    itar usuario
 */
routes.patch('/user', updateUserData)

/**
 * @description Rota de consultar livro por ID
 */
routes.post('/book', addFavoriteBook)

module.exports = routes
