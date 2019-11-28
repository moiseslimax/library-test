/**
 *  @description Função de validação de parâmetros
 * @param {Object} body
 * @returns {Object} errors
 */
module.exports = body => {
    let errors = {}

    if (!body.title) errors.title = 'O parâmetro {title} deve estar preenchido'
    if (!body.ISBN) errors.ISBN = 'O parâmetro {ISBN} deve estar preenchido'
    if (!body.category)
        errors.category = 'O parâmetro {category} deve estar preenchido'
    if (!body.year) errors.year = 'O parâmetro {year} deve estar preenchido'

    return {
        errors,
    }
}
