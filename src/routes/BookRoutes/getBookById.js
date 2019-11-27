const Book = require('../../../models/Book')
const validateBookId = require('../../utils/validators/validateBookId')

/**
 * @description Rota de consultar livro por ID
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.query

    const { errors } = validateBookId(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let filteredBook = await Book.findById(body.id).catch(err => {
        return undefined
    })

    if (!filteredBook) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum livro encontrado com esse id',
        })
    } else {
        return res.status(200).send({
            success: true,
            book: filteredBook,
        })
    }
}
