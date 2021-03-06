const Book = require('../../../models/Book')
const validateBookId = require('../../utils/validators/book/validateBookId')

/**
 * @description Remove livro da biblioteca
 * @memberof /book
 * @param {*} req
 * @param {*} res
 * @returns {*} Feedback
 */

module.exports = async (req, res) => {
    let body = req.body

    const { errors } = validateBookId(body)

    if (Object.keys(errors).length >= 1) {
        return res.status(400).send({ success: false, errors })
    }

    let deletedBook = await Book.findByIdAndDelete(body.id).catch(err => {
        return undefined
    })

    if (!deletedBook) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum livro encontrado com esse id',
        })
    } else {
        return res.status(200).send({
            success: true,
            message: 'Livro excluido com sucesso',
        })
    }
}
