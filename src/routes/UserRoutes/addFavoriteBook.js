const jwt = require('jsonwebtoken')

const validateFavoriteBook = require('../../utils/validators/library/validateFavoriteBook')
const User = require('../../../models/User')
const Book = require('../../../models/Book')

/**
 * @description Adiciona livro aos favoritos de um usuário
 * @memberof /users
 * @param {*} req
 * @param {*} res
 * @returns {String} Feedback
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateFavoriteBook(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let filteredBook = await Book.findById(body.bookId).catch(err => {
        return undefined
    })

    if (!filteredBook) {
        return res.status(404).send({
            success: false,
            message: 'Livro não listado na biblioteca',
        })
    }

    const token = req.header('Authorization').split('Bearer ')[1]
    let userAuth = jwt.verify(token, process.env.SECRET_KEY)

    let user = await User.findById(userAuth.id)

    if (user.favoriteBooks.find(book => book.toString() === body.bookId)) {
        return res.status(400).send({
            success: false,
            message: 'Livro já listado como favorito',
        })
    }
    user.favoriteBooks.push(body.bookId)

    await user.save()

    return res.status(200).send({
        success: true,
        message: 'Livro adicionado a lista de favoritos',
    })
}
