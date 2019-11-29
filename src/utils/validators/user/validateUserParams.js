/**
 *  @description Função de validação de parâmetros
 * @param {Object} body
 * @returns {Object} errors
 */
module.exports = body => {
    let errors = {}

    if (!body.name) errors.name = 'O parâmetro {nome} deve estar preenchido'
    if (!body.age) {
        errors.age = 'O parâmetro {age} deve estar preenchido'
    } else {
        if (Number(body.age) < 1 || Number(body.age) > 100) {
            errors.age = 'O parâmetro {age} deve estar entre 1 e 100'
        }
    }

    if (!body.phone) {
        errors.phone = 'O parâmetro {phone} deve estar preenchido'
    } else {
        if (body.phone.length > 11 || isNaN(Number(body.phone))) {
            errors.age = 'Telefone inválido!'
        }
    }
    if (!body.email) {
        errors.email = 'O parâmetro {email} deve estar preenchido'
    } else {
        const regExValidEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if (!body.email.match(regExValidEmail)) {
            errors.email = 'Email não é valido!'
        }
    }

    if (!body.password)
        errors.password = 'O parâmetro {password} deve estar preenchido'

    return {
        errors,
    }
}
