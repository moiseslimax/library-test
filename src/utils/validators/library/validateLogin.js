/**
 *  @description Função de validação de parâmetros
 * @param {Object} body
 * @returns {Object} errors
 */
module.exports = body => {
    let errors = {}

    if (!body.email) {
        errors.email = 'O parâmetro {email} deve estar preenchido'
    } else {
        const regExValidEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (!body.email.match(regExValidEmail)) {
            errors.email = 'E-mail deve ser um endereço valido'
        }
    }
    if (!body.password)
        errors.password = 'O parâmetro {password} deve estar preenchido'

    return {
        errors,
    }
}
