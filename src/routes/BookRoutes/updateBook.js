const Book = require('../../../models/Book')
const validateUpdateBook = require('../../utils/validators/book/validateUpdateBook')

/**
 * @description Atualiza/Edita livro por ID
 * @memberof /book
 * @param {*} req
 * @param {*} res
 * @returns {Object} book
 */

module.exports = async (req, res) => {
    let body = req.body

    let { errors } = validateUpdateBook(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let updatedBook = await Book.findByIdAndUpdate(body.id, body.updateParams, {
        new: true,
    }).catch(err => {
        return undefined
    })

    if (!updatedBook) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum livro encontrado com esse id',
        })
    } else {
        return res.status(200).send({
            success: true,
            updatedBook,
        })
    }
}
