const Book = require('../../../models/Book')

/**
 * @description Rota de consultar todos os usuarios
 *
 * @returns {Object} FeedBack
 */

module.exports = async (req, res) => {
    let body = req.query

    let books = await Book.find().catch(err => {
        return undefined
    })

    if (!books) {
        return res.status(404).send({
            success: false,
            message: 'Nenhum usuario encontrado',
        })
    } else {
        books.map(book => {
            book.password = undefined
        })
        return res.status(200).send({
            success: true,
            books,
        })
    }
}
