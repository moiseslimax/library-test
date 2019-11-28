const routes = require('express').Router()

const { checkAuth } = require('../../utils/helpers/tokenHelper')

//Rotas
const addBook = require('./addBook')
const getBookById = require('./getBookById')
const removeBook = require('./removeBook')
const updateBook = require('./updateBook')

/**
 * @description Rota de adicionar Livro
 */
routes.post('/book', checkAuth, addBook)

/**
 * @description Rota de consultar livro por ID
 */
routes.get('/book', getBookById)

/**
 * @description Rota de remover livro por ID
 */
routes.delete('/book', checkAuth, removeBook)

/**
 * @description Rota de atualizar/editar livro
 */
routes.patch('/book', checkAuth, updateBook)

module.exports = routes
