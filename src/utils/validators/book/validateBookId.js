/**
 *  @description Função de validação de parâmetros
 * @param {Object} body
 * @returns {Object} errors
 */
module.exports = body => {
    let errors = {}

    if (!body.id) errors.id = 'O parâmetro {id} deve estar preenchido'

    return {
        errors,
    }
}
