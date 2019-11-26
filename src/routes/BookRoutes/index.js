const routes = require('express').Router()

//Rotas
const addBook = require('./addBook')
const getAllBooks = require('../LibraryRoutes/getAllBooks')
const getBookById = require('./getBookById')
const removeBook = require('./removeBook')
const updateBook = require('./updateBook')

/**
 * @description Rota de adicionar Livro
 */
routes.post('/book', addBook)

/**
 * @description Rota de consultar livro por ID
 */
routes.get('/book', getBookById)

/**
 * @description Rota de remover livro
 */
routes.delete('/book', removeBook)

/**
 * @description Rota de atualizar/editar livro
 */
routes.put('/book', updateBook)

module.exports = routes
