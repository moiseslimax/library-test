const routes = require('express').Router()

//Rotas
const getAllBooks = require('./getAllBooks')
const getAllUsers = require('./getAllUsers')
const registerUser = require('../LibraryRoutes/registerUser')
const signIn = require('./signIn')

/**
 * @description Rota de adicionar Livro
 */
routes.get('/users', getAllUsers)

/**
 * @description Rota de consultar todos os Livros
 */
routes.get('/books', getAllBooks)

/**
 * @description Rota de registrar usuario
 */
routes.post('/user', registerUser)

/**
 * @description Rota de fazer login
 */
routes.post('/signin', signIn)

module.exports = routes
