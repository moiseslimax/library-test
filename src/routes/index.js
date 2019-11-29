const routes = require('express').Router()

//Indices de rotas
const bookRoutes = require('./BookRoutes')
const userRoutes = require('./UserRoutes')
const libraryRoutes = require('./LibraryRoutes')

/**
 * @description Operacoes referentes a usuário
 */
routes.use('/user', userRoutes)

/**
 * @description Operacoes referentes a livros
 */
routes.use('/book', bookRoutes)

/**
 * @description Operacoes referentes a biblioteca
 */
routes.use('/library', libraryRoutes)

module.exports = routes
