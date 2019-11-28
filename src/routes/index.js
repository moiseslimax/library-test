const routes = require('express').Router()

//Indices de rotas
const bookRoutes = require('./BookRoutes')
const userRoutes = require('./UserRoutes')
const libraryRoutes = require('./LibraryRoutes')

/**
 * @description Operacoes referentes a Library
 */
routes.use('/user', userRoutes)

/**
 * @description Operacoes referentes a User
 */
routes.use('/book', bookRoutes)

/**
 * @description Operacoes referentes a User
 */
routes.use('/library', libraryRoutes)

module.exports = routes
