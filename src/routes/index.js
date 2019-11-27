const routes = require('express').Router()

//Auth
const { checkAuth } = require('../utils/helpers/tokenHelper')

const bookRoutes = require('./BookRoutes')
const userRoutes = require('./UserRoutes')
const libraryRoutes = require('./LibraryRoutes')

/**
 * @description Operacoes referentes a Library
 */
routes.use('/user', checkAuth, userRoutes)

/**
 * @description Operacoes referentes a User
 */
routes.use('/library', bookRoutes)

/**
 * @description Operacoes referentes a User
 */
routes.use('/libraryx', checkAuth, libraryRoutes)

module.exports = routes
