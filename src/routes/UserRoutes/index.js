const routes = require('express').Router()

const { checkAuth } = require('../../utils/helpers/tokenHelper')

//Rotas
const getUserData = require('./getUserData')
const removeUser = require('./removeUser')
const updateUserData = require('./updateUserData')
const addFavoriteBook = require('./addFavoriteBook')

/**
 * @description Rota de consultar dados de usuario
 */
routes.get('/data', getUserData)

/**
 * @description Rota de remover usuario
 */
routes.delete('/remove', checkAuth, removeUser)

/**
 * @description Rota de atualizar/editar usuario
 */
routes.patch('/update', checkAuth, updateUserData)

/**
 * @description Rota de favoritar um livro por ID
 */
routes.post('/favoritebook', checkAuth, addFavoriteBook)

module.exports = routes
