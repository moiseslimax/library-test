module.exports = body => {
    let errors = {}

    if (!body.email) errors.email = 'email cant not be empty'
    if (!body.password) errors.password = 'password cant not be empty'

    return {
        errors,
    }
}
