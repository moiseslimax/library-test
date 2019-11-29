const validateBook = require('../../utils/validators/book/validateBookParams')
const Book = require('../../../models/Book')

/**
 * @description Adiciona livro em biblioteca
 * @memberof /book
 * @param {*} req
 * @param {*} res
 * @returns {*} Feedback
 */
module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateBook(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    const newBook = new Book(body)

    await newBook.save()

    return res.send({
        success: true,
        message: 'Livro salvo com sucesso',
    })
}
