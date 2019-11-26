const routes = require('express').Router()

const libraryRoutes = require('./BookRoutes')
const userRoutes = require('./UserRoutes')

/**
 * @description Operacoes referentes a Library
 */
routes.use('/user', userRoutes)

/**
 * @description Operacoes referentes a User
 */
routes.use('/library', libraryRoutes)

module.exports = routes
