const routes = require('express').Router()

//Rotas
const getAllBooks = require('./getAllBooks')
const getAllUsers = require('./getAllUsers')
const signIn = require('./signin')
const login = require('./login')

/**
 * @description Rota de consultar dados de todos os usuários
 */
routes.get('/users', getAllUsers)

/**
 * @description Rota de consultar dados de todos os livros
 */
routes.get('/books', getAllBooks)

/**
 * @description Rota de registrar usuario
 */
routes.post('/signin', signIn)

/**
 * @description Rota de fazer login
 */
routes.post('/login', login)

module.exports = routes
