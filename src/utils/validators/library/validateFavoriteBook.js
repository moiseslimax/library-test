/**
 *  @description Função de validação de parâmetros
 * @param {Object} body
 * @returns {Object} errors
 */
module.exports = body => {
    let errors = {}

    if (!body.bookId)
        errors.bookId = 'O parâmetro {bookId} deve estar preenchido'

    return {
        errors,
    }
}
