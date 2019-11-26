const routes = require('express').Router()

//Rotas
const getAllUsers = require('../LibraryRoutes/getAllUsers')
const getUserData = require('./getUserData')
const registerUser = require('./registerUser')
const removeUser = require('./removeUser')
const updateUserData = require('./updateUserData')
const signIn = require('./signIn')

/**
 * @description Rota de consultar todos os Livros
 */
routes.get('/user', getUserData)

/**
 * @description Rota de consultar livro por ID
 */
routes.post('/user', registerUser)

/**
 * @description Rota de remover livro
 */
routes.delete('/user', removeUser)

/**
 * @description Rota de atualizar/editar livro
 */
routes.put('/user', updateUserData)

module.exports = routes
